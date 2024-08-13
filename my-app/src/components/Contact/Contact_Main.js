import React from 'react';

import ContactForm from "./Contact_Form";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from '../assets/logo2.avif'
const ContactMain = () => {
    return (
        <section className="contact_main">
            <div className="container">

                    <ContactForm/>
                    <div className="card info">
                        <img src={logo} alt="logo"/>
                        <p><span>Sebastian Kowalik</span></p>
                        <p><a href="tel:+48793316004" className="contact_number"><span>+48 793 316 004</span></a></p>
                        <p><span>sebastiankowalik_@op.pl</span></p>
                      <a  href="https://www.facebook.com/p/Kowalik-Kamieniarstwo-100063562874398/?paipv=0&eav=AfaS-ieRF-mB41uRlunv-JZtScZZ2CHmjlEUoJwFdVR35KEyDq4sa0UdIuyDL6wovTg&_rdr" className=' facebook icon'><FontAwesomeIcon className="hoveredBlue fb" icon={faFacebook} />  Facebook</a>
                    </div>

            </div>
        </section>
    );
};

export default ContactMain;