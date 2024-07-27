import React, {useState} from 'react';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img5.jpg';

const MainOffer = () => {
    // Stan do przechowywania ID aktualnie rozwiniętej listy
    const [expandedListId, setExpandedListId] = useState(null);

    // Funkcja do obsługi rozwijania i zwijania list
    const toggleList = (id) => {
        setExpandedListId(prevId => (prevId === id ? null : id));
    };

    return (
        <main className="offer">
            <div className="container">
                <div className="offer_card">
                    <div className="card">

                        <img src={img1} alt='img'/>

                        <h2 className>Montaż</h2>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit
                            Lorem ipsum dolor sit amet,</p>
                        <button className={` ${expandedListId === 'montaz' ? 'grey' : 'orange'}  btn_offer_phone`}
                                onClick={() => toggleList('montaz')}>
                            {expandedListId === 'montaz' ? 'Ukryj Ofertę' : 'Zobacz Ofertę'}
                        </button>
                        <button className="btn_offer_desktop">Zobacz Realizacje Montażu</button>

                    </div>
                    <ul className={`offer-list ${expandedListId === 'montaz' ? 'visible' : 'invisible'}`}>
                        <li>Montaż Parapetów</li>
                        <li>Montaż Schodów</li>
                        <li>Montaż Blatów</li>
                        <li>Elewacje</li>
                        <li>Mała architektura</li>
                    </ul>
                </div>
                <div className="offer_card">
                    <div className="card">

                        <img src={img2} alt='img'/>
                        <h2>Renowacje</h2>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit
                            Lorem ipsum dolor sit amet,</p>
                        <button className={` ${expandedListId === 'renowacje' ? 'grey' : 'orange'} btn_offer_phone`}
                                onClick={() => toggleList('renowacje')}>
                            {expandedListId === 'renowacje' ? 'Ukryj Ofertę' : 'Zobacz Ofertę'}
                        </button>
                        <button className="btn_offer_desktop">Zobacz Realizacje Renowacji</button>
                    </div>
                    <ul className={`offer-list ${expandedListId === 'renowacje' ? 'visible' : 'invisible'}`}>
                        <li>Schody kamienne</li>
                        <li>Posadzki kamienne</li>
                        <li>Posadzki z Lastriko</li>
                        <li>Schody z Lastriko</li>
                    </ul>
                </div>
                <div className="offer_card">
                    <div className="card">

                        <img src={img3} alt='img'/>
                        <h2>Inne</h2>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit
                            Lorem ipsum dolor sit amet,</p>
                        <button className={` ${expandedListId === 'inne' ? 'grey' : 'orange'} btn_offer_phone`}
                                onClick={() => toggleList('inne')}>
                            {expandedListId === 'inne' ? 'Ukryj Ofertę' : 'Zobacz Ofertę'}
                        </button>
                        <button className="btn_offer_desktop">Zobacz Realizacje</button>
                    </div>
                    <ul className={`offer-list ${expandedListId === 'inne' ? 'visible' : 'invisible'}`}>
                        <li>Montaż spieków wieloformatowych</li>
                        <li>Montaż gresów</li>
                        <li>Montaż betonu architektonicznego</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default MainOffer;
