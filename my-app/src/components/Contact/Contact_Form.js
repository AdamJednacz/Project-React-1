import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
const HomeForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const message = e.target.message.value;

        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (!message) {
            setMessageError(true);
        } else {
            setMessageError(false);
        }

        if (email && message) {
            emailjs.sendForm('service_fvsyx9b', 'template_z7dnmmz', form.current, 'xVX1u_j9htuV4fiW2')
                .then(() => {

                    console.log("message sent");
                    e.target.reset();
                    setSubmitted(true);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };
    return (
        <form ref={form} onSubmit={sendEmail}>

            <h1>Skontaktuj się z nami!</h1>
            <input type="text" name="name" required={true} placeholder="Imię"/>
            <input type="text" name="surname" required={true}  placeholder="Nazwisko"/>
            <input type="email" name="email"  required={true} placeholder="E-mail"/>
            <input type="number" name="number" required={true} placeholder="+48 123 123 123"/>
            <textarea rows="6" name="message" required={true} placeholder="Wiadomość..."/>
            <div className="checkbox_container">
                <input type="checkbox" required={true}/>
                <p>Oświadczam, że zapoznałem się z regulaminem, w pełni rozumiem jego treść i akceptuję wszystkie
                    zawarte w nim warunki. Zgadzam się również na przetwarzanie moich danych osobowych zgodnie z
                    obowiązującymi przepisami.</p>
            </div>
            <button type="submit" className="form_btn">Wyślij</button>
            {submitted &&(
                <p className="sended_message">Wiadomość została wysłana<FontAwesomeIcon className="icon" icon={faFaceSmile} /></p>
            )}
        </form>
    );
};

export default HomeForm;