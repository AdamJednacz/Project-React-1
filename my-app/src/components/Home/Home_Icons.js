import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import star from "../assets/star.gif";
import calendar from "../assets/calendar.gif";
import shield from "../assets/shield.gif";

const Home_Icons = () => {
    return (
        <section className="home_icons">
        <h1 className="home_icons_title">Co zyskujesz przy współpracy z nami?</h1>
        <div className="container">
            <div className="box">
                <h1>Jakość Pracy</h1>
                <LazyLoadImage className="icon" src={star} alt="star" effect='blur'/>
                <p>Najlepsze techniki i materiały</p>
            </div>
            <div className="box">
                <h1>Doświadczenie</h1>
                <LazyLoadImage className="icon" src={calendar} alt="caledna"/>
                <p>Ponad <span>+200</span> wykonanych realizacji</p>
            </div>
            <div className="box">
                <h1>Zaufanie</h1>
                <LazyLoadImage className="icon" src={shield} alt="shield"/>
                <p>Ponad <span>+150</span> rekomendacji</p>
            </div>
        </div>
    </section>);
};

export default Home_Icons;