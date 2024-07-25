import React from 'react';
import MainSlider from "./Main_Slider";

const Main = () => {
    return (
        <main>
            <div className="container" >
                <div className="card">
                    <h1>Lorem Ipsum</h1>
                    <h2>Lorem Ipsum Dolor <span>Ipsum</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Zobacz więcej</button>
                </div>
                <MainSlider/>
            </div>
        </main>
    );
};

export default Main;