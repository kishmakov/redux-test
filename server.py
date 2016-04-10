import pdb, traceback, sys
import os

from flask import Flask, render_template, send_from_directory
from flask.ext.socketio import SocketIO, emit

cur_dir = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__, static_url_path=cur_dir, template_folder=cur_dir)
app.config['SECRET_KEY'] = 'secret_key'
socketio = SocketIO(app)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

@app.route('/js/<path:path>')
def send_js(path):
    try:
        return send_from_directory('js', path)
    except:
        type, value, tb = sys.exc_info()
        traceback.print_exc()
        pdb.post_mortem(tb)

@app.route('/')
def index():
        return render_template('index.html')

@socketio.on('connect', namespace='/test')
def test_connect():
    print('client connected')

@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    print('client disconnected')

@socketio.on('message', namespace='/test')
def handle_message(message):
    print('received message: ' + message)

@socketio.on('json', namespace='/test')
def handle_json(json):
    print('received json: ' + str(json))

# @socketio.on('my event', namespace='/test')
# def test_message(message):
#     emit('my response', {'data': message['data']})

# @socketio.on('my broadcast event', namespace='/test')
# def test_message(message):
#     emit('my response', {'data': message['data']}, broadcast=True)

# @socketio.on('connect', namespace='/test')
# def test_connect():
#     emit('my response', {'data': 'Connected'})


if __name__ == "__main__":
    socketio.run(app, debug=True)