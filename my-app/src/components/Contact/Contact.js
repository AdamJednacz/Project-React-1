import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {style} from "../../App";
import Contact_Main from "./Contact_Main";

const Contact = () => {
    return (
        <section>
            <Header/>

                <Contact_Main/>

            <Footer/>
        </section>
    );
};

export default Contact;