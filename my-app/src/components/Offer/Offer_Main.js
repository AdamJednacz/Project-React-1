import React, {useState} from 'react';

import img1 from '../assets/blat_łazienkowy.jpg';
import img2 from '../assets/renowacje.jpg';
import img3 from '../assets/beton_wnętrze_1.jpg';

const OfferMain = () => {

    const [expandedListId, setExpandedListId] = useState(null);


    const toggleList = (id) => {
        setExpandedListId(prevId => (prevId === id ? null : id));
    };

    return (
        <main className="offer">
            <div className="container">
                <div className="offer_card">
                    <div className="card">

                        <img src={img1} alt='img'/>

                        <h2 className>Montaż Kamień</h2>
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
                        <li>Montaż Blatów</li>
                        <li>Montaż Elewacji</li>
                        <li>Montaż Małej Architektury</li>
                        <li>Montaż Parapetów</li>
                        <li>Montaż Schodów</li>
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
                        <li>Posadzki z Lastriko</li>
                        <li>Schody z Lastriko</li>
                        <li>Schody kamienne</li>
                        <li>Posadzki kamienne</li>
                    </ul>
                </div>
                <div className="offer_card">
                    <div className="card">

                        <img src={img3} alt='img'/>
                        <h2>Montaż Beton</h2>
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
                        <li>Montaż betonu architektonicznego</li>
                        <li>Montaż gresów</li>
                        <li>Montaż spieków wieloformatowych</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default OfferMain;
