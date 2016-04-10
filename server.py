import pdb, traceback, sys
import os

from flask import Flask, render_template, send_from_directory
app = Flask(__name__, static_url_path=os.path.dirname(os.path.abspath(__file__)), template_folder=os.path.dirname(os.path.abspath(__file__)))

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

if __name__ == "__main__":
    app.run()