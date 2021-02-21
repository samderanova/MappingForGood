import json
import os

import firebase_admin
import pandas as pd
from firebase_admin import credentials, firestore
from flask import Flask, request, render_template
from flask_cors import CORS
import ModelFunction

current_dir = os.path.dirname(os.path.abspath(__file__))
auth_json_path = os.path.join(current_dir, 'gcp-3f8449c9ed6e.json')

cred = credentials.Certificate(auth_json_path)
firebase_admin.initialize_app(cred)
db = firestore.client()
messages = db.collection(u'messages')


app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, World!"
    

@app.route("/map")
def mapRequest():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    data_set_path = os.path.join(current_dir, "Modeling_Data_Set.csv")
    data = pd.read_csv(data_set_path, header=0)
    print(ModelFunction.predictor(9, data))
    return render_template('map.html')


@app.route("/helper-form")
def helper_form():
    return {"1": 2, "3": 4}


@app.route("/message-board",methods=['GET','POST'])
def message_board():
    if request.method == 'GET':
        docs = messages.stream()
        return json.dumps([doc.to_dict() for doc in docs])
    else:
        data = request.json
        db.collection(u'messages').document(data['username']).set(data)
        return data

if __name__ == "__main__":
    app.run(debug=True)

