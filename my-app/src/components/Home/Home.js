import React from 'react';
import bg from '../../assets/biały_marmur.jpg'

import Main from "./Main";
import Header from "../Header";
import Footer from "../Footer";
import Short_AboutUs from "./Short_AboutUs";
import {style} from "../../App";
import Icons from "./Icons";
const Home = () => {


    return (
        <>
            <Header/>
            <div className='bg' style={style}>
                <Main/>
            </div>
            <Short_AboutUs/>
            <Icons/>
            <Footer/>
        </>
    );
};

export default Home;