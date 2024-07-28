import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {style} from "../../App";
import Contact_Main from "./Contact_Main";
import Title from "../Title";

const Contact = () => {
    return (
        <section>
            <Header/>
            <Title h1={"Informacje Kontaktowe"} p={"Sebastian Kowalik, właściciel firmy, z przyjemnością odpowie na Państwa pytania,\n" +
                "                        zaproponuje odpowiednią usługę i przedstawi najlepszą ofertę cenową."}/>
            <Contact_Main/>

            <Footer/>
        </section>
    );
};

export default Contact;