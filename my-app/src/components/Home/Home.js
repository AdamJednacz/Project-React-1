import React, {lazy} from 'react';

const Header = lazy(() => import("../Header"));
const Footer = lazy(() => import("../Footer"));
const Home_Main = lazy(() => import("../Home/Home_Main"));
// const HomeAboutUs = lazy(() => import("../Home/Home_AboutUs"));
const Home_Icons = lazy(() => import("../Home/Home_Icons"));
const HomeOffer = lazy(() => import("../Home/Home_Offer"));
const HomeContact = lazy(() => import("../Home/Home_Contact"));

const Home = () => {


    return (
        <>
            <Header/>
            <Home_Main/>

            <Home_Icons/>
            <HomeOffer/>
            <HomeContact/>
            <Footer/>

        </>
    );
};

export default Home;