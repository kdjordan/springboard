from flask import Flask, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import *

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'

debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

"""
Set up our local state variables
RESPONSES = answers to our questions (our local stateless DB)
s = a prebuilt set of instructions with a title to be displayed
questions = the questions to be asked based on our particular survey 
"""
RESPONSES = []
s = satisfaction_survey
questions = s.questions


@app.route('/')
def index():
    """Renders initial welcome page with instructions from our class in surveys.py"""
    return render_template('surveys.html', title=s.title, instruction=s.instructions)


@app.route('/questions/<int:num>')
def question(num):
    """checks to see if we are at the end of the survey - if not renders the next question
        also makes sure user isn't skipping any questions by tracking the q_index
    """
    if num != len(RESPONSES) and num != 0:
        num = len(RESPONSES)
        flash('Please advance one question at a time')
    if num <= len(questions)-1:
        return render_template('questions.html', num=num, q=questions[num].question, choices=questions[num].choices, length=len(questions))
    else:
        return redirect('/thanks')


@app.route('/answers', methods=['POST'])
def answers():
    """Gets form answers and adds to our RESPONSES list then redirects to the next question"""
    RESPONSES.append(request.form.get('q'))
    the_index = int(request.form.get('index'))+1
    new_url = '/questions/' + str(the_index)
    return redirect(new_url)


@app.route('/thanks')
def thanks():
    """redirects to thank you page at end of survey"""
    return render_template('thanks.html', res=RESPONSES)



