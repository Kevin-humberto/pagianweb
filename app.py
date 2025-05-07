from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configuración de MySQL
mysql = MySQL()
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Tu_p!ss1234'
app.config['MYSQL_DB'] = 'productoss'
mysql.init_app(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    mensaje_exito = None

    if request.method == 'POST':
        nombre = request.form.get('nombre')
        correo = request.form.get('correo')
        mensaje = request.form.get('mensaje')

        if nombre and correo and mensaje:
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO contactos (nombre, correo, mensaje) VALUES (%s, %s, %s)",
                        (nombre, correo, mensaje))
            mysql.connection.commit()
            cur.close()
            mensaje_exito = "¡Gracias por contactarnos!"

    return render_template('index.html', mensaje=mensaje_exito)


if __name__ == '__main__':
    app.run(debug=True)
