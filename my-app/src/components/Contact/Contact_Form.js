import React from 'react';

const HomeForm = () => {
    return (
        <form>
            <h1>Skontaktuj się z nami!</h1>
            <input type="text" placeholder="Imię"/>
            <input type="text" placeholder="Nazwisko"/>
            <input type="email" placeholder="E-mail"/>
            <input type="number" placeholder="+48 123 123 123"/>
            <textarea rows="6" placeholder="Wiadomość..."/>
            <div className="checkbox_container">
                <input type="checkbox"/>
                <p>Oświadczam, że zapoznałem się z regulaminem, w pełni rozumiem jego treść i akceptuję wszystkie
                    zawarte w nim warunki. Zgadzam się również na przetwarzanie moich danych osobowych zgodnie z
                    obowiązującymi przepisami.</p>
            </div>
            <button type="submit" className="form_btn">Wyślij</button>
        </form>
    );
};

export default HomeForm;