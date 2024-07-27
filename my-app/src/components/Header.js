import React, {useState} from 'react';
import logo2 from './assets/logo_napis2.png'
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
                    <Link className='Link' to='/'><p className='p1'>Strona główna</p></Link>
                    <Link className='Link' to='/onas'><p>O nas</p></Link>
                    <Link className='Link' to='/oferta'><p>Oferta</p></Link>
                    <Link className='Link' to='/realizacje'><p>Realizacje</p></Link>
                    <Link className='Link' to='/kontakt'> <p>Kontakt</p></Link>
                </div>
                    <a className="number" href="tel:+48793316004">+48 793 316 004</a>
                </div>
        </header>
    );
};

export default Header;