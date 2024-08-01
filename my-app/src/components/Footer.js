import React from 'react';
import logo from './assets/logo2.png'
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const navigate = useNavigate();
    const handleLinkClick = (id) => {
        if (id) {
            window.scrollTo(0, 0);
            navigate(`${id}`);
        }
    };
    return (
        <footer>
            <div className="container">
                <div className="row1">
                <img src={logo} alt='logo'/>
                <div className='col1 line'>
                    <h1>Informacje</h1>
                    <p className=" hoveredWhite" onClick={()=>handleLinkClick("/")}>Strona główna</p>
                    <p className=" hoveredWhite" onClick={()=>handleLinkClick("/onas")}>O nas</p>
                    <p className=" hoveredWhite" onClick={()=>handleLinkClick("/oferta")}>Oferta</p>
                    <p className=" hoveredWhite" onClick={()=>handleLinkClick("/realizacje")}>Realizacje</p>
                    <p className=" hoveredWhite" onClick={()=>handleLinkClick("/kontakt")}>Kontakt</p>
                </div>
                <div className='col2 line'>
                    <h1>Kontakt</h1>
                    <p className='hoveredWhite' ><span><FontAwesomeIcon  icon={faPhone}/></span><a className=" contact_number" href="tel:+48793316004">+48 793 316 004</a></p>
                    <p className='hoveredWhite'><span><FontAwesomeIcon icon={faEnvelope}/></span>sebastiankowalik_@op.pl</p>
                </div>
                <div className='col3 line'>
                    <h1>Social Media</h1>
                    <div className='media'>
                        <a  href="https://www.facebook.com/p/Kowalik-Kamieniarstwo-100063562874398/?paipv=0&eav=AfaS-ieRF-mB41uRlunv-JZtScZZ2CHmjlEUoJwFdVR35KEyDq4sa0UdIuyDL6wovTg&_rdr" className=' icon'><FontAwesomeIcon className="hoveredBlue" icon={faFacebook} /></a>
                        <a className="icon"><FontAwesomeIcon className='hoveredGreen' icon={faWhatsapp} /></a>

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