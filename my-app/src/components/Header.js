import React, {useState} from 'react';
import logo2 from '../assets/logo_napis2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faX} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";




const Header = () => {
    const [isOpen,setIsOpen] = useState(false)

    const handleOpenMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <header>
                <div className="container">
                <img src={logo2} alt='logo'/>
                    <FontAwesomeIcon className="bars" icon={faBars} onClick={handleOpenMenu} />
                <div  className={`menu ${isOpen ? 'open' : ''}`}>
                    <FontAwesomeIcon className="bars x"  icon={faX} onClick={handleOpenMenu} />
                    <h1>Menu główne</h1>
                    <p><Link className='Link' to='/'>Strona główna</Link></p>
                    <p><Link className='Link' to='/onas'>O nas</Link></p>
                    <p><Link className='Link' to='/oferta'>Oferta</Link></p>
                    <p><Link className='Link' to='/realizacje'>Realizacje</Link></p>
                    <p><Link className='Link' to='/kontakt'>Kontakt</Link></p>
                </div>
                <p className="number">
                    +48 500 100 500
                </p>
                </div>
        </header>
    );
};

export default Header;