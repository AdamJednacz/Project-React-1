import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import OfferMain from "./Offer_Main";
import {style} from "../../App";


const Offer = () => {


    return (
        <section>
            <Header/>
        <div className='bg' style={style}>

            <OfferMain/>
        </div>
            <Footer/>
        </section>
    );
};

export default Offer;