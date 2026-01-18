# Manual de creación de la aplicación Flask
# Este archivo define la función create_app que configura
# y devuelve una instancia de la aplicación Flask.
from flask import Flask

def create_app():
    app = Flask(__name__)

    from .routes import main
    app.register_blueprint(main)

    return app