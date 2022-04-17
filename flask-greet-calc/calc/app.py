from flask import Flask, request
import operations

app = Flask(__name__)


@app.route('/add')
def add():
    return f"{operations.add(int(request.args['a']), int(request.args['b']))}"


@app.route('/sub')
def sub():
    return f"{operations.sub(int(request.args['a']), int(request.args['b']))}"


@app.route('/mult')
def mult():
    return f"{operations.mult(int(request.args['a']), int(request.args['b']))}"


@app.route('/div')
def div():
    return f"{operations.div(int(request.args['a']), int(request.args['b']))}"


@app.route('/math/<op>')
def math(op):
    print(op)
    maths = {
        'add': operations.add(int(request.args['a']), int(request.args['b'])),
        'sub': operations.sub(int(request.args['a']), int(request.args['b'])),
        'mult': operations.mult(int(request.args['a']), int(request.args['b'])),
        'div': operations.div(int(request.args['a']), int(request.args['b']))
    }
    return f"{maths[op]}"

