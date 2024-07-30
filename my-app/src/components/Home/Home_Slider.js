import React, { useState, useEffect, useRef } from 'react';
import img1 from "../assets/parapet.jpg";
import img2 from "../assets/m_architektura.jpg";
import img3 from "../assets/elewacje.jpg";
import img4 from "../assets/blat_łazienkowy.jpg";
import img5 from "../assets/renowacje.jpg";
import img6 from "../assets/schody.jpg";


const images = [img1, img2, img3, img4, img5, img6];

const HomeSlider = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current);
    }, []);

    const startInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 10000);
    };

    const nextSlide = () => {
        if (animating) return;
        setAnimating(true);
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        if (animating) return;
        setAnimating(true);
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleDotClick = (index) => {
        if (animating || index === current) return;
        setAnimating(true);
        setCurrent(index);
        startInterval(); // resetowanie interwału po kliknięciu kropki
    };

    const handleAnimationEnd = () => {
        setAnimating(false);
    };

    return (
        <section className="slider">
            <div className="slider-images">
                <img
                    src={images[current]}
                    alt={`img-${current}`}
                    className={`slider-image ${animating ? 'fade-in' : ''}`}
                    onAnimationEnd={handleAnimationEnd}
                />
            </div>
            <div className="slider-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${current === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default HomeSlider;
