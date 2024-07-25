import React from 'react';
import logo from '../assets/logo2.png'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row1">
                <img src={logo} alt='logo'/>
                <div className='col1 line'>
                    <h1>Informacje</h1>
                    <p><Link className='Link' to='/'>Strona główna</Link></p>
                    <p><Link className='Link' to='/onas'>O nas</Link></p>
                    <p><Link className='Link' to='/oferta'>Oferta</Link></p>
                    <p><Link className='Link' to='/realizacje'>Realizacje</Link></p>
                    <p><Link className='Link' to='/kontakt'>Kontakt</Link></p>
                </div>
                <div className='col2 line'>
                    <h1>Kontakt</h1>
                    <p><span><FontAwesomeIcon icon={faPhone}/></span>+48 500 100 500</p>
                    <p><span><FontAwesomeIcon icon={faEnvelope}/></span>sampleemail@gmail.com</p>
                </div>
                <div className='col3 line'>
                    <h1>Social Media</h1>
                    <div className='media'>
                        <span><FontAwesomeIcon icon={faFacebook} /></span>
                        <span><FontAwesomeIcon icon={faWhatsapp} /></span>

                    </div>
                </div>
                </div>
                <div className="row2">
                    <p>&#169; Kowalik Kamieniarstwo</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;