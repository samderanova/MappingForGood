from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, World!"
    

@app.route("/map")
def mapRequest():
    return "Map"

@app.route("/helper-form")
def mapRequest():
    return "Form"

    
@app.route("/message-board",methods=['GET','POST'])
def mapRequest():
    return "Messages"
    


if __name__ == "__main__":
    app.run(debug=True)

