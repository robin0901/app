import os
from datetime import datetime
from markupsafe import escape
from flask import render_template, abort, send_file

from flaskapp import app

user_name = "지환"
RANK_PATH = os.path.join(os.getcwd(), 'flaskapp', 'static', 'data', 'ranking.txt')


@app.route('/')
@app.route('/calculator')
def mainpage():
    with open(os.path.join(os.getcwd(), 'flaskapp', 'static', 'data', 'waterbottle.csv')) as f:
        lines = f.readlines()

    waterbottle_footprint = [line.strip().split(',') for line in lines]
    return render_template('calculator.html', waterbottle_footprint=waterbottle_footprint)


@app.route('/calculator_result/<score>')
def calculator_result(score):
    with open(RANK_PATH, "a") as f:
        f.write(f'{user_name},{score},{datetime.now()}\n')

    return render_template('calculator_result.html', score=score)


@app.route('/checklist')
def checklist():
    with open(RANK_PATH, "r", encoding="UTF-8") as f:
        user_data = f.readlines()

    ranks = {}
    for data in user_data:
        name, score, time = data.strip().split(',')
        ranks[name] = int(score)

    avg_score = 208 if len(ranks) == 0 else int(sum(ranks.values()) / len(ranks))

    return render_template('checklist.html', avg_score=avg_score)


@app.route('/checklist_result')
def checklist_result():
    return render_template('checklist_result.html')


@app.route('/ranking')
def ranking():
    with open(RANK_PATH, "r", encoding="UTF-8") as f:
        user_data = f.readlines()

    ranks = {}
    for data in user_data:
        name, score, time = data.strip().split(',')
        ranks[name] = int(score)

    sorted_ranks = sorted(ranks.items(), key=lambda x: x[1])

    return render_template('ranking.html', ranks=sorted_ranks)


@app.route('/chart/<username>')
def chart(username):
    with open(RANK_PATH, "r", encoding="UTF-8") as f:
        user_data = f.readlines()

    histories = []
    for data in user_data:
        name, score, time = data.strip().split(',')
        if name != username:
            continue
        histories.append([int(score), time[:10]])

    x_values = []
    y_values = []
    best_score = histories[0][0]
    best_date = histories[0][1]
    for history in histories[-7:]:
        x_values.append(history[1])
        y_values.append(history[0])

        if history[0] < best_score:
            best_score = history[0]
            best_date = history[1]

    return render_template('chart.html', username=username,
                           x_values=','.join(x_values), y_values=y_values,
                           best_score=best_score, best_date=best_date)


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
