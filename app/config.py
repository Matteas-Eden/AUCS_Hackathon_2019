import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    DEBUG = True
    SECRET_KEY = os.environ.get(
        "SECRET_KEY") or "ak;sjfkljsdfkljklwejfklmdsmlmfkldmfklas;dfkl;ekfkojk"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or \
        "sqlite:///" + os.path.join(basedir, "app.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    API_KEY = '03323b4d7a3740f1b37d65b5f1c0c17d'
