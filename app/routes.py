from flask import render_template, flash, redirect, url_for
from app import app
from app.forms import LoginForm


@app.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        return redirect(url_for("home"))
    return render_template("login.html", title="Sign In", form=form)


@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")
