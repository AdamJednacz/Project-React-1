import React from 'react';

import ContactForm from "./Contact_Form";

const ContactMain = () => {
    return (
        <section className="contact_main">
            <div className="container">
                <div className="contact_info">
                    <div className="info">
                        <p><span>Sebastian Kowalik</span></p>
                        <span>Telefon: </span><a href="tel:+48793316004" className="contact_number">+48 793 316 004</a>
                        <p><span>E-mail:</span> sebastiankowalik_@op.pl</p>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default ContactMain;