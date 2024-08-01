import React, {lazy} from 'react';
const Header = lazy(() => import("../Header"));
const Footer = lazy(() => import("../Footer"));
const Title = lazy(() => import("../Title"));
const Contact_Main  = lazy(() => import("../Contact/Contact_Main"));
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