from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'

debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


@app.route('/')
def index():
    """render title and instructions for our imported survey"""
    return render_template('surveys.html', survey=survey)


@app.route('/init')
def init():
    """starts survey flow and resets our session for RESPONSES"""
    session['RESPONSES'] = []
    return redirect('/questions/0')


@app.route('/questions/<int:num>')
def question(num):
    """checks to see if we are at the end of the survey - if not renders the next question
        also makes sure user isn't skipping any questions by manipulating the query string
    """
    res = session.get('RESPONSES')
    """check to see if the url has been manipulated"""
    if len(res) != num:
        flash('Please advance one question at a time')
        return redirect(f'/questions/{len(res)}')

    """survey is complete - redirect to thanks page"""
    if len(res) == len(survey.questions):
        return redirect('/thanks')

    """handles case were user manipulates query string right from the jump"""
    if res is None:
        return redirect('/')

    return render_template('questions.html', num=num, q=survey.questions[num].question, choices=survey.questions[num].choices, length=len(survey.questions))


@app.route('/answers', methods=['POST'])
def answers():
    """Gets form answers and adds to our RESPONSES list then redirects to the next question"""
    res = session['RESPONSES']
    answer = request.form.get('answer')
    res.append(answer)
    session['RESPONSES'] = res
    return redirect(f"/questions/{len(res)}")


@app.route('/thanks')
def thanks():
    """redirects to thank you page at end of survey"""
    return render_template('thanks.html', res = session.get('RESPONSES'))



