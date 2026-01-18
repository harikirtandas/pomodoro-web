# Manual de rutas de la aplicación Flask
# Este archivo define las rutas principales de la aplicación
from flask import Blueprint, render_template
from .services import get_motivational_phrases

main = Blueprint("main", __name__)

@main.route("/")
def index():
    phrases = get_motivational_phrases()
    return render_template("index.html", phrases=phrases)
