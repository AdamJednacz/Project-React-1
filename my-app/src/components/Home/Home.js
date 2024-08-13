import React, {lazy} from 'react';


const Header = lazy(() => import("../Header"));
const Footer = lazy(() => import("../Footer"));
const Home_Main = lazy(() => import("../Home/Home_Main"));
const Home_Opinions = lazy(() => import("../Home/Home_Opinions"));
const Home_Icons = lazy(() => import("../Home/Home_Icons"));
const HomeOffer = lazy(() => import("../Home/Home_Offer"));
const HomeContact = lazy(() => import("../Home/Home_Contact"));

const Home = () => {


    return (
        <>
            <Header/>
            <Home_Main/>
            <Home_Icons/>
            <Home_Opinions/>
            <HomeOffer/>
            <HomeContact/>
            <Footer/>

        </>
    );
};

export default Home;