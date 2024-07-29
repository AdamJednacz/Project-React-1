import React from 'react';
import img1 from "../assets/parapet.jpg";
import img2 from "../assets/m_architektura.jpg";
import img3 from "../assets/elewacje.jpg";
import img4 from "../assets/blaty.jpg";
import img5 from "../assets/renowacje.jpg";
import img6 from "../assets/schody.jpg";
import { useNavigate } from 'react-router-dom';

const HomeOffer = () => {
    const navigate = useNavigate();
    const createBoxStyle = (img) => ({
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        overflow: 'hidden'
    });

    const handleButtonClick = () => {
        window.scrollTo(0, 0);
        navigate('/oferta');
    };

    return (
        <section className="home_offer">
            <div className="container">
                <h1>Co oferujemy ?</h1>
                <p>Montaż architektury kamiennej: blaty, parapety, schody, elewacje, mała architektura. Renowacja
                    posadzek i schodów kamiennych oraz z lastriko.</p>
                 <button onClick={handleButtonClick} className='home_offer_btn'>Zobacz Ofertę</button>
                <div className="home_offer_container">
                    <div className="row">
                        <div className="box" style={createBoxStyle(img4)}>
                            <h2>Blaty</h2>
                            <a className="box_link">Zobacz więcej</a>
                        </div>

                        <div className="half" style={createBoxStyle(img6)}>
                            <h2>Schody</h2>
                            <a className="box_link">Zobacz więcej</a>
                        </div>
                        <div className="half" style={createBoxStyle(img1)}>
                            <h2>Parapety</h2>
                            <a className="box_link">Zobacz więcej</a>
                        </div>

                    </div>
                    <div className="row">
                        <div className="box" style={createBoxStyle(img5)}>
                            <h2>Renowacje</h2>
                            <a className="box_link">Zobacz więcej</a>
                        </div>

                        <div className="half" style={createBoxStyle(img2)}>
                            <h2>Mała architektura</h2>
                            <a className="box_link">Zobacz więcej</a>
                        </div>
                        <div className="half" style={createBoxStyle(img3)}>
                            <h2>Elewacje</h2>
                            <a className="box_link">Zobacz więcej</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeOffer;
