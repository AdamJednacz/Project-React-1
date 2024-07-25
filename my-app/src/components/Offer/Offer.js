import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import MainOffer from "./MainOffer";
import bg from "../../assets/biały_marmur.jpg";

const Offer = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition:'center',
        overflow: 'hidden'
    };

    return (
        <section>
        <div className='bg'>
            <Header/>
            <MainOffer/>

        </div>
            <Footer/>
        </section>
    );
};

export default Offer;