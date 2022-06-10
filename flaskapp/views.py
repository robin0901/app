import os
from flaskapp import app

from flask import render_template, abort, send_file
from markupsafe import escape


@app.route('/')
def mainpage():
    return render_template('calculator.html')


@app.route('/checklist')
def checklist():
    return render_template('checklist.html')


@app.route('/checklist_result')
def checklist_result():
    return render_template('checklist_result.html')


@app.route('/ranking')
def ranking():
    file_path = os.path.exists(os.path.join(os.getcwd(), 'flaskapp', 'static', 'data', 'ranking.txt'))

    with open(file_path, "w", encoding="UTF-8") as f:
        # ranks = f.readlines()
        f.write("hello")
    # print(ranks)
    return render_template('ranking.html')


@app.route('/css/<path:subpath>')
def serve_css(subpath):
    css_path = os.path.join(os.path.dirname(__file__), f'css/{escape(subpath)}')

    if os.path.exists(css_path):
        return send_file(css_path, cache_timeout=0)
    else:
        return abort(404)


@app.route('/js/<path:subpath>')
def serve_js(subpath):
    js_path = os.path.join(os.path.dirname(__file__), f'js/{escape(subpath)}')

    if os.path.exists(js_path):
        return send_file(js_path, cache_timeout=0)
    else:
        return abort(404)