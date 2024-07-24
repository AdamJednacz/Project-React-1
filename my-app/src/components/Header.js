import React, {useState} from 'react';
import logo2 from '../assets/logo_napis2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faX,faArrowRight} from "@fortawesome/free-solid-svg-icons";




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
                    <p>Home </p>
                    <p>About</p>
                    <p>Lets go</p>
                    <p>Contact</p>
                </div>
                <p className="number">
                    +48 500 100 500
                </p>
            </div>
        </header>
    );
};

export default Header;