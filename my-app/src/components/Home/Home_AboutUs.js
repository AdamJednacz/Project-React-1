import React from 'react';
import img1 from '../assets/logo2.png';


import {Link} from "react-router-dom";
const HomeAboutUs = () => {
    return (
        <section className="home_about_us">
            <div className="container">
                <div className="home_about_us_container">

                        <img className="img1" src={img1} alt='img1'/>



                    <div className="home_about_us_text">
                        <h1>O nas</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. L
                            orem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make</p>
                        <Link className='Link' to='/onas'><button className="btn">Zobacz więcej</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAboutUs;