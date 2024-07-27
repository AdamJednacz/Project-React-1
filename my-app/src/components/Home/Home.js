import React from 'react';


import Home_Main from "./Home_Main";
import Header from "../Header";
import Footer from "../Footer";
import HomeAboutUs from "./Home_AboutUs";
import {style} from "../../App";
import Home_Icons from "./Home_Icons";
import HomeOffer from "./Home_Offer";
import Home_Form from "./Home_Form";
const Home = () => {


    return (
        <>
            <Header/>
            <div className='bg' style={style}>
                <Home_Main/>
            </div>
            <HomeAboutUs/>
            <Home_Icons/>
            <HomeOffer/>
            <Home_Form/>
            <Footer/>
        </>
    );
};

export default Home;