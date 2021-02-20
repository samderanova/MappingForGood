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
            <div className="Home">
                <header>
                    <h1>Our Mission</h1>
                </header>
                <main>
                    <div className="box-1" id="#problem">
                        <h2>The Problem</h2>
                        <div className="box-1-left">
                            <p>Poverty is a persisting problem throughout the United States with over 46.2 million Americans
                                living in poverty according to the US Census and with the emergence of Covid-19 that number has only
                                grown. In hope of reducing the economic inequity within Sacramento our group has created a map that
                                displays the various regions that face poverty.
                            </p>
                        </div>
                        <div className="box-1-right">
                            <img src="" width="400" height="400" style={{backgroundColor: 'gray'}}></img>
                        </div>
                    </div>
                    <hr />
                    <div className="box-2">
                        <h2>The Solution</h2>
                        <div className="box-2-left">
                            <p>To help solve this problem, we created a map that maps poverty across the city of 
                                Sacramento, CA. Some metrics we used were:</p>
                            <ul>
                                <li>Food deserts in areas with limited access to food</li>
                                <li>Income levels</li>
                            </ul>
                            <p>With these metrics, our map can provide informative advice to government
                                agencies and nonprofit organizations to help them pinpoint which areas need
                                aid the most.
                            </p>
                        </div>
                        <div className="box-2-right">
                            <img src=""></img>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}