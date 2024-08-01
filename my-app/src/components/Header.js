import React, { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleLinkClick = (id) => {

            window.scrollTo(0, 0);
            navigate(`${id}`);

    };
    const isActive = (path) => location.pathname === path ? 'border' : '';

    return (
        <header>
            <div className="container">
                <h1 onClick={()=>handleLinkClick('/')} className="logo">Kowalik <span>Kamieniarstwo</span></h1>
                <FontAwesomeIcon className="bars" icon={faBars} onClick={handleOpenMenu} />
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <FontAwesomeIcon className="bars x" icon={faX} onClick={handleOpenMenu} />
                    <h1 className="menu_h1">Menu główne</h1>
                        <p className={` ${isActive('/')}`} onClick={()=>handleLinkClick('/')}>Strona główna</p>
                        <p className={`${isActive('/onas')}` } onClick={()=>handleLinkClick('/onas')}>O nas</p>
                        <p className={`${isActive('/oferta')}`} onClick={()=>handleLinkClick('/oferta')}>Oferta</p>
                        <p className={`${isActive('/realizacje')}`} onClick={()=>handleLinkClick('/realizacje')}>Realizacje</p>
                        <p className={`${isActive('/kontakt')} `} onClick={()=>handleLinkClick('/kontakt')}>Kontakt</p>
                </div>
                <a className="number" href="tel:+48793316004">+48 793 316 004</a>
            </div>
        </header>
    );
};

export default Header;
