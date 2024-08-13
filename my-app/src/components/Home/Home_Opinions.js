import React, { useState } from 'react';
import logo from '../assets/logo2.avif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HomeOpinions = () => {
    const [index, setIndex] = useState(0);

    const opinions = [
        {
            id: 1,
            company: "Nazwa Firmy 1",
            text: "...Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
        },
        {
            id: 2,
            company: "Nazwa Firmy 2",
            text: "...Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        },
        {
            id: 3,
            company: "Nazwa Firmy 3",
            text: "...Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        },
    ];

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % opinions.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? opinions.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="home_opinions">
            <div className="container">
                <h1>Rekomendacje naszych klientów</h1>
                <div className="opinions">
                    <FontAwesomeIcon
                        className="angle left"
                        icon={faAngleLeft}
                        onClick={handlePrev}
                    />
                    <div
                        className="opinion_wrapper"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >

                        {opinions.map((opinion) => (
                            <div key={opinion.id} className="opinion">
                                <div className="opinion_title">
                                    <img src={logo} alt="logo" />
                                    <h2>{opinion.company}</h2>
                                </div>
                                <div className="opinion_box">
                                    <p className="opinion_text">{opinion.text}</p>
                                    <a href="#">[Zobacz Opinie]</a>
                                </div>
                            </div>
                        ))}

                    </div>
                    <FontAwesomeIcon
                        className="angle right"
                        icon={faAngleRight}
                        onClick={handleNext}
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeOpinions;
