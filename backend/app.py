from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, World!"
    

@app.route("/map")
def mapRequest():
    return "Map"

@app.route("/helper-form")
def helper_form():
    return {"1": 2, "3": 4}

    
@app.route("/message-board",methods=['GET','POST'])
def message_board():
    return "Messages"
    


if __name__ == "__main__":
    app.run(debug=True)

