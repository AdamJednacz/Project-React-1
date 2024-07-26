import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import MainOffer from "./MainOffer";
import {style} from "../../App";


const Offer = () => {


    return (
        <section>
            <Header/>
        <div className='bg' style={style}>

            <MainOffer/>
        </div>
            <Footer/>
        </section>
    );
};

export default Offer;