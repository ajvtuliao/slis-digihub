from flask import Flask, send_from_directory, request, session, redirect
import os, secrets

# Create a Flask instance and set the static url to the built files
# of Vue
app = Flask(__name__, static_url_path='', 
            static_folder='../../frontend/dist')

# Create secret key for session-based login
app.secret_key = secrets.token_hex()

# when route is /, then serve home
@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

# POST request to /login is expected to have json data containing
# the username and password
@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        if request.json['username'] == 'admin' and \
            request.json['password'] == 'admin':

            # add the username to session
            session['username'] = request.json['username']

            # return a json object with a single key named login
            # login is true if user is successfully logged in
            return {
                'login': 'username' in session
            }

# check if user is logged in in case that someone tries to access
# /admin without logging in
@app.route('/admin')
def checkIfAdmin():
    if 'username' not in session:
        return redirect('/')

# logs the user out
@app.route('/logout')
def logout():

    # remove username from session
    session.pop('username', None)

    # return a json object with a single key named login
    # login is true if user is successfully logged in
    return {
        'login': 'username' in session
    }