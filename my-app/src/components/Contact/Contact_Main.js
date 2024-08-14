import React, { useState, useEffect } from 'react';

import ContactForm from "./Contact_Form";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../assets/logo2.avif';
import handPhone from "../assets/hand_phone.png";
import smartPhone from "../assets/smartphone.png";

const ContactMain = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1381);

    const handleResize = () => {
        setIsDesktop(window.innerWidth > 1381);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const backgroundImage = isDesktop ? handPhone : smartPhone;

    const style1 = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100%",
        backgroundPosition: "top",
        overflow: 'hidden',
    };

    return (
        <section className="contact_main">
            <div className="container">
                <ContactForm />
                <div className="hand_phone smartphone" style={style1}>
                    <div className="card info">
                        <img src={logo} alt="logo" />
                        <p><span className="name">Sebastian Kowalik</span></p>
                        <p><a href="tel:+48793316004" className="contact_number"><span>+48 793 316 004</span></a></p>
                        <p><span>sebastiankowalik_@op.pl</span></p>
                        <a href="https://www.facebook.com/p/Kowalik-Kamieniarstwo-100063562874398/?paipv=0&eav=AfaS-ieRF-mB41uRlunv-JZtScZZ2CHmjlEUoJwFdVR35KEyDq4sa0UdIuyDL6wovTg&_rdr" className='facebook icon'>
                            <FontAwesomeIcon className="hoveredBlue fb" icon={faFacebook} />  Facebook
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMain;
