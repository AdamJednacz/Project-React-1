import React from 'react';

import ContactForm from "./Contact_Form";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactMain = () => {
    return (
        <section className="contact_main">
            <div className="container">
                <div className="contact_info">
                    <div className="info">
                        <p><span>Sebastian Kowalik</span></p>
                        <span>Telefon: </span><a href="tel:+48793316004" className="contact_number">+48 793 316 004</a>
                        <p><span>E-mail:</span> sebastiankowalik_@op.pl</p>
                      <a  href="https://www.facebook.com/p/Kowalik-Kamieniarstwo-100063562874398/?paipv=0&eav=AfaS-ieRF-mB41uRlunv-JZtScZZ2CHmjlEUoJwFdVR35KEyDq4sa0UdIuyDL6wovTg&_rdr" className=' facebook icon'><FontAwesomeIcon className="hoveredBlue" icon={faFacebook} />  Facebook</a>

                    </div>
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default ContactMain;