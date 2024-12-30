from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

# Cargar variables de entorno desde .env
load_dotenv()

app = Flask(__name__)

# Configuración de Flask-Mail
app.config['MAIL_SERVER'] = 'sandbox.smtp.mailtrap.io'  # Servidor de Mailtrap
app.config['MAIL_PORT'] = 2525                         # Puerto SMTP de Mailtrap
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')  # Usuario Mailtrap desde .env
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')  # Contraseña Mailtrap desde .env
app.config['MAIL_USE_TLS'] = True                      # Usa TLS
app.config['MAIL_USE_SSL'] = False                     # No usa SSL

# Inicializar Flask-Mail
mail = Mail(app)

# Ruta para enviar correos
@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        # Obtener datos del cliente
        data = request.get_json()
        nombre = data.get('nombre')
        correo = data.get('correo')
        descripcion = data.get('descripcion')

        if not all([nombre, correo, descripcion]):
            return jsonify({"message": "Todos los campos son obligatorios"}), 400

        # Configuración del mensaje
        msg = Message(
            subject=f"Consulta recibida de {nombre}",
            sender="no-reply@example.com",  # Remitente ficticio
            recipients=[correo],           # Destinatario: correo ingresado por el usuario
            body=f"Hola {nombre},\n\nHemos recibido tu consulta:\n{descripcion}\n\nGracias por contactarnos."
        )

        # Enviar el correo
        mail.send(msg)
        return jsonify({"message": "Correo enviado con éxito"}), 200

    except Exception as e:
        return jsonify({"message": "Error al enviar el correo", "error": str(e)}), 500

# Ejecutar la aplicación
if __name__ == '__main__':
    app.run(debug=True)
