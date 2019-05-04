from flask import render_template, flash, redirect, url_for, send_file
from flask_login import current_user, login_user, logout_user, login_required
from app import app, db
from app.src.member import Member
from app.src.event import Event
from app.forms import LoginForm, MemberRegistrationForm, EventRegistrationForm


@app.route('/background_process_test')
@login_required
def background_process_test():
    print("Hello")
    return ""

@app.route("/library/<library>")
@login_required
def library(library):
    return render_template("{}.html".format(library))


@app.route("/pics/<picture>")
@login_required
def pics(picture):
    return send_file(
        "static/pics/{}".format(picture),
        mimetype="image/gif")


@app.route("/dashboard")
@login_required
def dashboard():
    return render_template("dashboard.html")


@app.route("/groups")
@login_required
def groups():
    return render_template("groups.html")


@app.route("/events/register", methods=["GET", "POST"])
@login_required
def event_registration():
    form = EventRegistrationForm()
    if form.validate_on_submit():
        event = Event(
            name=form.name.data,
            location=form.location.data,
            time=form.time.data)
        db.session.add(event)
        db.session.commit()
        flash("Congratulations, your event has been registered!")
        return redirect(url_for("events"))
    return render_template("event_registration.html", form=form)


@app.route("/events")
@login_required
def events():
    return render_template("events.html", events=Event.query.all())


@app.route("/profile")
@login_required
def profile():
    return render_template("profile.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    form = MemberRegistrationForm()
    if form.validate_on_submit():
        user = Member(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash("Congratulations, you are now a registered user!")
        return redirect(url_for("login"))
    return render_template("register.html", title="Register", form=form)


@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for("home"))


@app.route("/login", methods=["GET", "POST"])
def login():
    if current_user.is_authenticated:
        return redirect(url_for("home"))
    form = LoginForm()
    if form.validate_on_submit():
        user = Member.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash("Invalid username or password")
            return redirect(url_for("login"))
        login_user(user, remember=form.remember_me.data)
        user.update_location()
        return redirect(url_for("dashboard"))
    return render_template("login.html", title="Sign In", form=form)

@app.route("/home")
@app.route('/')
def home():
    return render_template("home.html")
