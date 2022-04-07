from flask import Flask, send_from_directory, request, session, redirect
import os, secrets

app = Flask(__name__, static_url_path='', 
            static_folder='../../frontend/dist')

app.secret_key = secrets.token_hex()

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')
    
@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        if request.json['username'] == 'admin' and \
            request.json['password'] == 'admin':
            session['username'] = request.json['username']
            return {
                'login': 'username' in session
            }

@app.route('/admin')
def checkIfAdmin():
    if 'username' not in session:
        return redirect('/')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return {
        'login': 'username' in session
    }