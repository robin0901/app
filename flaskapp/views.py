from flaskapp import app
from flask import render_template


@app.route('/')
def mainpage():
    return render_template('calculator.html')


@app.route('/checklist')
def checklist():
    return render_template('checklist.html')