import React from 'react';
import MainSlider from "./Home_Slider";
import {Link} from "react-router-dom";

const Home_Main = () => {
    return (
        <main className="home_main">
            <div className="container" >
                <div className="card">
                    <h1>Lorem Ipsum</h1>
                    <h2>Lorem Ipsum Dolor <span>Ipsum</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link className='Link' to='/onas'><button className='btn_main'>Zobacz więcej</button></Link>
                </div>
                {/*<MainSlider/>*/}
            </div>
        </main>
    );
};

export default Home_Main;