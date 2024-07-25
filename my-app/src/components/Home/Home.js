import React from 'react';
import bg from '../../assets/biały_marmur.jpg'

import Main from "./Main";
import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition:'center',
        // Adjust the radius as needed
        overflow: 'hidden'
    };


    return (
        <>
        <div className='bg' style={style}>

                <Header/>
                <Main/>

        </div>
        <Footer/>
        </>
    );
};

export default Home;