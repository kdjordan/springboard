from flask import Flask, request, render_template
from stories import Story
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'
# debug = DebugToolbarExtension(app)


@app.route('/')
def index():
    return render_template('form.html')


@app.route('/story')
def get_story():
    s = Story(['place', 'noun', 'verb', 'adjective', 'plural_noun'],
              """Once upon a time in a long-ago {place}, there lived a large {adjective} {noun}. It loved to {verb} {plural_noun}.""")
    ans = {'place': request.args['place'], 'noun': request.args['noun'], 'verb': request.args['verb'], 'adjective': request.args['adjective'], 'plural_noun': request.args['plural_noun']}
    text = s.generate(ans)
    return render_template('story.html', res=text)
