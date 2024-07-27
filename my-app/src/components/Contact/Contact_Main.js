import React from 'react';
import Home_Form from "./Contact_Form";

const ContactMain = () => {
    return (
        <section className="contact_main">
            <div className="container">
                <div className="contact_text">
                    <h1>Informacje Kontaktowe</h1>
                    <p>
                        Sebastian Kowalik, właściciel firmy, z przyjemnością odpowie na Państwa pytania,
                        zaproponuje odpowiednią usługę i przedstawi najlepszą ofertę cenową.</p>
                </div>
                <div className="contact_info">
                    <div className="info">
                        <p><span>Sebastian Kowalik</span></p>
                        <span>Telefon: </span><a href="tel:+48793316004" className="contact_number">+48 793 316 004</a>
                        <p><span>E-mail:</span> sampleemail@gmial.com</p>
                    </div>
                    <Home_Form/>
                </div>
            </div>
        </section>
    );
};

export default ContactMain;