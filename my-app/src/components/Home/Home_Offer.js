import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/parapet.avif";
import img2 from "../assets/m_architektura.avif";
import img3 from "../assets/elewacje.avif";
import img4 from "../assets/blat_łazienkowy.avif";
import img5 from "../assets/renowacje.avif";
import img6 from "../assets/schody.avif";

const HomeOffer = () => {
    const navigate = useNavigate();

    const sectionMapping = {
        'Blaty': 'blaty',
        'Schody': 'schody',
        'Parapety': 'parapety',
        'Renowacje': 'renowacje',
        'Mała architektura': 'mała_architektura',
        'Elewacje': 'elewacje'
    };

    const handleLinkClick = (title) => {
        const id = sectionMapping[title];
        if (id) {
            window.scrollTo(0, 0);
            navigate(`/realizacje/${id}`);
        }
    };

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
                            <a
                                onClick={() => handleLinkClick('Blaty')}
                                className="box_link">
                                Zobacz więcej
                            </a>
                        </div>

                        <div className="half" style={createBoxStyle(img6)}>
                            <h2>Schody</h2>
                            <a
                                onClick={() => handleLinkClick('Schody')}
                                className="box_link">
                                Zobacz więcej
                            </a>
                        </div>
                        <div className="half" style={createBoxStyle(img1)}>
                            <h2>Parapety</h2>
                            <a
                                onClick={() => handleLinkClick('Parapety')}
                                className="box_link">
                                Zobacz więcej
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="box" style={createBoxStyle(img5)}>
                            <h2>Renowacje</h2>
                            <a
                                onClick={() => handleLinkClick('Renowacje')}
                                className="box_link">
                                Zobacz więcej
                            </a>
                        </div>

                        <div className="half" style={createBoxStyle(img2)}>
                            <h2>Mała architektura</h2>
                            <a
                                onClick={() => handleLinkClick('Mała architektura')}
                                className="box_link">
                                Zobacz więcej
                            </a>
                        </div>
                        <div className="half" style={createBoxStyle(img3)}>
                            <h2>Elewacje</h2>
                            <a
                                onClick={() => handleLinkClick('Elewacje')}
                                className="box_link">
                                Zobacz więcej
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeOffer;
