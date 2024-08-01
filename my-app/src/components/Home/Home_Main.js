import React, {lazy, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {style} from "../../App";

const Home_Slider = lazy(() => import("../Home/Home_Slider"));

const Home_Main = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.matchMedia("(min-width: 1381px)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1381px)");

        const handleMediaQueryChange = (e) => {
            setIsWideScreen(e.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <div className='bg' style={style}>
            <main className="home_main">
                <div className="container" >
                    <div className="main_card">
                        <h1>Lorem Ipsum</h1>
                        <h2>Lorem Ipsum Dolor</h2>
                        <span>Ipsum</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link className='Link' to='/onas'><button className='btn_main'>Zobacz więcej</button></Link>
                    </div>
                    {isWideScreen && <Home_Slider />}
                </div>
            </main>
        </div>
    );
};

export default Home_Main;
