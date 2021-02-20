import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    componentDidMount() {
        var problemObserver = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                entries[0].target.setAttribute('style', 'animation-name: slide-from-left; animation-duration: 1s;');
            }
        }, { threshold: [0] });
        var solutionObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.setAttribute('style', 'animation-name: slide-from-right; animation-duration: 1s;');
            }
        })
        var sacramentoObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.setAttribute('style', 'animation-name: slide-up; animation-duration: 1s;');
            }
        })
        
        problemObserver.observe(document.getElementById("#problem"));
        solutionObserver.observe(document.getElementById("#solution"));
        sacramentoObserver.observe(document.getElementById("#why-sacramento"));
    }
    render() {
        return (
            <div className="Home backmost-card">
                <header>
                    <h1>Our Mission</h1>
                </header>
                <main>
                    <div className="box-1" id="#problem">
                        
                        <div className="box-1-left card">
                            <h2 >The Problem</h2>
                            <p>
                                Poverty is a persisting problem throughout the United States with over <strong>46.2 million</strong> Americans living in poverty according to the US Census
                                and with the emergence of Covid-19 that number has only grown. In hope of reducing the economic inequity within 
                                Sacramento our group has created a map that displays the various regions that face poverty.
                            </p>
                        </div>
                        <div className="box-1-right">
                            <img src="https://kubrick.htvapps.com/vidthumb/0d8ba403-2af2-4608-9f85-967929330f74/0d8ba403-2af2-4608-9f85-967929330f74_image.jpg?crop=0.775xw:0.774xh;0.0718xw,0" alt="Picture of homelessness"></img>
                        </div>
                    </div>
                    <div className="box-2" id="#solution">
                        <div className="box-2-left">
                            <img src="" alt="Picture of map"></img>
                        </div>
                        <div className="box-2-right card">
                            <h2>The Solution</h2>
                            <p>To help solve this problem, we created a map that maps poverty across the city of 
                                Sacramento, CA. Some metrics we used were:</p>
                            <ul>
                                <li>Food deserts are areas with limited access to nutritious and affordable food.
                                    In particular an area is classified as a food desert if a neighborhood is more than 1 mile away from a supermarket.
                                </li>
                                <li>Income data from the US census to determine areas of economic inequity</li>
                            </ul>
                            <p>By using these metrics our team aims to be able to pinpoint areas that are in need of additonal aid in the form of social programs or donations.
                            We also acknowledge that many areas can be overlooked by Census and other federal datasets, and so our team created a message board in which people can communicate the needs of their communities.</p>
                        </div>
                    </div>
                    <div className="box-3" id="#why-sacramento">
                        <div className="box-3-left card">
                            <h2>Why Sacramento?</h2>
                            <p>
                                The Community College Student from Sacramento noticed the economic inequality while living in Sacramento such as the large amount of homeless
                                camps and the differences in living conditions that span across various neighborhoods within Sacramento and was motivated to create a web app
                                that aimed to solve some of these problem by pinpointing areas within Sacramento that needed aid and directing government agencies and nonprofit
                                organizations to provide aid to these areas. The other members of our team were overjoyed to take on a project that would focus on a fulfilling
                                goal of improving the living conditions of others.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}