import React, {lazy} from 'react';



const Title = lazy(() => import("../Title"));
const Header = lazy(() => import("../Header"));
const Footer = lazy(() => import("../Footer"));
const OfferMain = lazy(() => import("../Offer/Offer_Main"));

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