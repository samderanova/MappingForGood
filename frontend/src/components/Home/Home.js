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
            <div className="Home backmost-card">
                <header>
                    <h1>Our Mission</h1>
                </header>
                <main>
                    <div className="box-1" id="#problem">
                        <h2>The Problem</h2>
                        <div className="box-1-left card card-font">
                        <p>
                                    Poverty is a persisting problem throughout the United States with over 46.2 million Americans living in poverty according to the US Census
                                and with the emergence of Covid-19 that number has only grown. In hope of reducing the economic inequity within 
                                Sacramento our group has created a map that displays the various regions that face poverty
                            </p>
                            <p>
                                Our team used several metrics to decide whether a region in Sacramento needed aid. 
                            One of the metrics we used was income since areas of low income often lack the resources necessary to provide the people with a better lifestyle.
                            We also use the metric of determining whether an area is a food desert. An area is classified as a food desert if there are no supermarkets present within a 1-mile radius of the area. 
                            These areas are often overlooked by supermarket companies as the consumer base is unable to afford food and thus the people are unable to access healthy meals.
                            </p>
                            <p>
                            The Community College Student from Sacramento noticed the economic inequality while living in Sacramento such as the large amount of homeless camps and the differences in living conditions that span across various neighborhoods within Sacramento and was motivated to create a web app that aimed to solve some of these problem by pinpointing areas within Sacramento that needed aid and directing government agencies and nonprofit organizations to provide aid to these areas. The other members of our team were overjoyed to take on a project that would focus on a fulfilling goal of improving the living conditions of others.

                            </p>
                        </div>
                        <div className="box-1-right">
                            <img src="" width="400" height="400" style={{backgroundColor: 'gray'}} alt="Map of "></img>
                        </div>
                    </div>
                    <div className="box-2 card card-font">
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