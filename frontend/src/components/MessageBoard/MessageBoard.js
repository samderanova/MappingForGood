import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import {InputBase} from '@material-ui/core';
import './MessageBoard.css';

export default class MessageBoard extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:5000/message-board')
            .then(res => {
                var docElements = [];
                for (var i=0; i < res.data.length; i++) {
                    docElements.push(
                        <div key={i} className="message">
                            <p style={{color: 'white'}}>{res.data[i].username}</p>
                            <hr />
                            <p style={{padding: "20px 0"}}>{res.data[i].message}</p>
                        </div>
                    )
                }
                ReactDOM.render(docElements, document.getElementById("message-board"))
            })
            .catch(err => console.error(err));
    }
    render() {
        return (
            <div className="MessageBoard">
                <div id="message-board"></div>
            </div>
        )
    }
}