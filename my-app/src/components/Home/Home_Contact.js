import React from 'react';
import img1 from '../assets/telefon.avif';
import { useNavigate } from 'react-router-dom';

const HomeContact = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        window.scrollTo(0, 0);
        navigate('/kontakt');
    };

    const style = {
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        overflow: 'hidden'
    };

    return (
        <section className="home_form">
            <div className="container">
                <div className="phone" style={style}>
                    <h1>Skontaktuj się z nami!</h1>
                    <button className="phone_btn" onClick={handleButtonClick}>Zobacz więcej</button>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
