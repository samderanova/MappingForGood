import React from 'react';
import './MessageBoard.css';

export default class MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }
    componentDidMount() {
        // Call to localhost:5000, the Flask backend which will get the messages stored in
        // a MongoDB database
        // fetch('http://localhost:5000/messages')
            // .then(() => null)
            // .catch(err => console.error(err));
    }
    sendMessage(e) {
        // Send message to Flask backend so it can be updated with MongoDB
        let input_elements = document.getElementsByTagName("input");
        let textarea = document.getElementById('')
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
        console.log('Hello');
    }
    render() {
        return (
            <div className="MessageBoard">
                <h1>Help in your neighborhood</h1>
                <form>
                    
                        <input type="email" className="pill" placeholder="Enter Email..." required={true}/>
                        <br></br><br></br>
                        <input className="pill" type="text" placeholder="Enter Username..." name="username" />
                        <br></br><br></br>
                        <textarea name="newMessage" placeholder="Enter Message" id="newMessageDescription" autoFocus required={true}></textarea>
                
                    <input type="submit" value="Send Message" onClick={this.sendMessage} />
                </form>
            </div>
        )
    }
}