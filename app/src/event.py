from app import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import requests
import json


class Event(db.Model):
    eventId = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), index=True, unique=False)
    location = db.Column(db.String(120), index=True, unique=False)
    time = db.Column(db.DateTime, index=True, unique=False)

    def __repr__(self):
        return '<Event {}>'.format(self.name)
