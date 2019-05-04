from app import db, login
from app.config import Config
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import requests
import json


class Member(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    location = ""

    def __repr__(self):
        return "<Member {}>".format(self.username)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def update_location(self):
        self.location = get_district()


@login.user_loader
def load_user(id):
    return Member.query.get(int(id))


def get_district():
    r = requests.get(
        'https://api.ipgeolocation.io/ipgeo?apiKey=' +
        Config.API_KEY)
    geoData = json.loads(r.text)
    return geoData["district"]
