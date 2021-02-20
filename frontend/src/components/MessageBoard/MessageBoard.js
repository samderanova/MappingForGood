import React from 'react';
import './MessageBoard.css';

export default class MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            message: ''
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
    }
    componentDidMount() {
        // Call to localhost:5000, the Flask backend which will get the messages stored in
        // a MongoDB database
        fetch('http://localhost:5000/message-board')
            .then((res) => {
            })
            .catch((err) => console.error(err))
    }
    sendMessage(e) {
        // Send message to Flask backend so it can be updated with MongoDB
        let input_elements = document.getElementsByTagName("input");
        let textarea = document.getElementById('newMessageDescription');
        for (let el of input_elements) {
            if (!el.checkValidity()) {
                el.style.border = "3px solid red";
                return;
            }
        }
        if (!textarea.checkValidity()) {
            textarea.style.border = "3px solid red";
            return;
        }
        fetch('http://localhost:5000/message-board', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                "email": this.state.email,
                "username": this.state.username,
                "message": this.state.message
            })
        })
    }
    updateFormState(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div className="MessageBoard">
                <h1>Looking to get help for your neighborhood? Please leave your concerns here!</h1>
                <form>
                    <label for="email">Email</label><br></br><br></br>
                    <input type="email" name="email" className="pill" required={true} onChange={this.updateFormState}/>
                    <br></br><br></br>
                    <label for="username">Username</label><br></br><br></br>
                    <input className="pill" type="text" name="username" required={true} onChange={this.updateFormState} />
                    <br></br><br></br>
                    <label for="message">Message</label><br></br><br></br>
                    <textarea name="message" id="newMessageDescription" autoFocus required={true} onChange={this.updateFormState}></textarea>
                    <br></br><br></br>
                    <button type="button" onClick={this.sendMessage}>Send Message</button>

                </form>
            </div>
        )
    }
}