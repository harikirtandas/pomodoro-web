# igual que front controller en otros frameworks
# Este archivo sirve como punto de entrada para la aplicación Flask
# y se encarga de crear y configurar la aplicación.
# Importar la función create_app desde el paquete app
# arranca el servidor Flask cuando se ejecuta este archivo directamente.
from app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)