import React from 'react';
import img1 from '../assets/telefon2.jpg'

const HomeContact= () => {
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
                    <h1>Skontaktuj się z nami !</h1>
                    <button className="phone_btn">Zobacz więcej</button>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;