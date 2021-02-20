import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    componentDidMount() {
        var observer = new IntersectionObserver(function(entries) {
            console.log(entries)
            if(entries[0].isIntersecting) {
                entries[0].target.setAttribute('style', 'animation-name: slide-up; animation-duration: 1s;');
            }
        }, { threshold: [0] });
        
        observer.observe(document.getElementById("#problem"));
    }
    render() {
        return (
            <div className="Form">               
                <form action="handle-form"method="post">
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Name:
                    <input type="text" name="email" />
                </label>
                <label>
                    Name:
                    <input type="textArea" name="message" />
                </label>
                <input type="submit" value="Submit" />
                </form>               
            </div>
        )
    }
}