from flask import Flask, request
import operations

app = Flask(__name__)


@app.route('/add')
"""Get query string params and add values together"""
def add():
    return f"{operations.add(int(request.args['a']), int(request.args['b']))}"


@app.route('/sub')
"""Get query string params and subtract values"""
def sub():
    return f"{operations.sub(int(request.args['a']), int(request.args['b']))}"


@app.route('/mult')
"""Get query string params and multiply values"""
def mult():
    return f"{operations.mult(int(request.args['a']), int(request.args['b']))}"


@app.route('/div')
"""Get query string params and divide values"""
def div():
    return f"{operations.div(int(request.args['a']), int(request.args['b']))}"


@app.route('/math/<op>')
def math(op):
    maths = {
        'add': operations.add(int(request.args['a']), int(request.args['b'])),
        'sub': operations.sub(int(request.args['a']), int(request.args['b'])),
        'mult': operations.mult(int(request.args['a']), int(request.args['b'])),
        'div': operations.div(int(request.args['a']), int(request.args['b']))
    }
    return f"{maths[op]}"

