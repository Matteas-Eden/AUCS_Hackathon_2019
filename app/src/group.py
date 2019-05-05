from app import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import requests
import json


class Group(db.Model):
    groupId = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), index=True, unique=False)
    location = db.Column(db.String(120), index=True, unique=False)
    group = db.Column(db.String(120), index=True, unique=False)
    picture = db.Column(db.String(120), index=True, unique=False)

    def __repr__(self):
        return '<Group {}>'.format(self.name)
