import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShield,faStar,faCalendar} from  '@fortawesome/free-solid-svg-icons';
const Home_Icons = () => {
    return (
        <section className="home_icons">
            <h1 className="home_icons_title">Co zyskujesz przy współpracy z nami?</h1>
            <div className="container">
                <div className="box">
                    <h1>Jakość Pracy</h1>
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <p>Najlepsze techniki i materiały</p>
                </div>
                <div className="box">
                    <h1>Doświadczenie</h1>
                    <FontAwesomeIcon className="icon"  icon={faCalendar} />
                    <p>Ponad <span>+200</span> wykonanych realizacji</p>
                </div>
                <div className="box">
                    <h1>Zaufanie</h1>
                    <FontAwesomeIcon className="icon"  icon={faShield} />
                    <p>Ponad <span>+150</span>  rekomendacji</p>
                </div>
            </div>
        </section>
    );
};

export default Home_Icons;