import React from 'react';
import './Form.css';

export default class Form extends React.Component {
    componentDidMount() {
        var observer = new IntersectionObserver(function(entries) {
            console.log(entries)
            if(entries[0].isIntersecting) {
                entries[0].target.setAttribute('style', 'animation-name: slide-up; animation-duration: 1s;');
            }
        }, { threshold: [0] });
        
        observer.observe(document.getElementById("#form-container"));
    }
    render() {
        return (
            <div id ="#form-container"> 
                <h1 id="#form-header">How Can We Help You</h1>              
                <form className="card" action="handle-form"method="post"><br/>
                    <input className="text-input" type="text" placeholder="Enter Username..." name="username" /><br/>
                    <input className="text-input" type="text" placeholder="Enter Email..." name="email" /><br/>
                    <input id="#text-area-input"type="textArea" placeholder="Issues in my town..." name="message" /><br/>
                    <input id="#submit-button" type="submit" value="Submit" />
                </form>               
            </div>
        )
    }
}