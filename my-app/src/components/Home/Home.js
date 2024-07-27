import React from 'react';


import Home_Main from "./Home_Main";
import Header from "../Header";
import Footer from "../Footer";
import Short_AboutUs from "./Home_AboutUs";
import {style} from "../../App";
import Home_Icons from "./Home_Icons";
import Short_Offer from "./Home_Offer";
const Home = () => {


    return (
        <>
            <Header/>
            <div className='bg' style={style}>
                <Home_Main/>
            </div>
            <Short_AboutUs/>
            <Home_Icons/>
            <Short_Offer/>
            <Footer/>
        </>
    );
};

export default Home;