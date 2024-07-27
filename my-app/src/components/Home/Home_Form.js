import React from 'react';
import img1 from '../assets/telefon2.jpg'
const HomeForm = () => {
    return (
        <section className="home_form">
            <div className="container">
            <form>
                <h1>Skontaktuj się z nami!</h1>
                <input type="text" placeholder="Imię"/>
                <input type="email" placeholder="Nazwisko"/>
                <input type="email" placeholder="E-mail"/>
                <input type="number" placeholder="+48 123 123 123"/>
                <textarea rows="6" placeholder="Wiadomość..."/>
            </form>
                <img src={img1} alt="telefon" />
            </div>
        </section>
    );
};

export default HomeForm;