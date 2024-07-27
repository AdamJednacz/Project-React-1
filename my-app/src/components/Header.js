import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo2 from './assets/logo_napis2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => location.pathname === path ? 'border' : '';

    return (
        <header>
            <div className="container">
                <img src={logo2} alt='logo' />
                <FontAwesomeIcon className="bars" icon={faBars} onClick={handleOpenMenu} />
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <FontAwesomeIcon className="bars x" icon={faX} onClick={handleOpenMenu} />
                    <h1>Menu główne</h1>
                    <Link className='Link' to='/'>
                        <p className={`p1 ${isActive('/')}`}>Strona główna</p>
                    </Link>
                    <Link className='Link' to='/onas'>
                        <p className={`${isActive('/onas')}`}>O nas</p>
                    </Link>
                    <Link className='Link' to='/oferta'>
                        <p className={`${isActive('/oferta')}`}>Oferta</p>
                    </Link>
                    <Link className='Link' to='/realizacje'>
                        <p className={`${isActive('/realizacje')}`}>Realizacje</p>
                    </Link>
                    <Link className='Link' to='/kontakt'>
                        <p className={`${isActive('/kontakt')}`}>Kontakt</p>
                    </Link>
                </div>
                <a className="number" href="tel:+48793316004">+48 793 316 004</a>
            </div>
        </header>
    );
};

export default Header;
