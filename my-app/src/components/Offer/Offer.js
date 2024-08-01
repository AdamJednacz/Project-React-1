import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import OfferMain from "./Offer_Main";
import {style} from "../../App";
import Home_Main from "../Home/Home_Main";
import Title from "../Title";


const Offer = () => {


    return (
        <section>
            <Header/>
            <Title h1={"Oferta"} p={"Tutaj drodzy państwo możecie znaleść naszą ofertę oraz co możemy wykonać."}/>
            <OfferMain/>
            <Footer/>
        </section>
    );
};

export default Offer;