import React, { useState, useEffect, useRef } from 'react';
import img1 from "../assets/beton_elewacje_2.avif";
import img2 from "../assets/beton_elewacje_3.avif";
import img4 from "../assets/blat_łazienkowy.avif";
import img5 from "../assets/beton_9.avif";
import img6 from "../assets/schody_renowacja.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const images = [img1, img2, img4, img5, img6];

const HomeSlider = () => {
    const [current, setCurrent] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const intervalRef = useRef(null);
    const [popupImage, setPopupImage] = useState(null);

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current);
    }, []);

    const startInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            handleNextSlide();
        }, 6000);
    };

    const handleNextSlide = () => {
        setFadeOut(true);

        setTimeout(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            setFadeOut(false);
            setFadeIn(true);

            setTimeout(() => {
                setFadeIn(false);
            }, 1500);
        }, 1500);
    };

    const handleDotClick = (index) => {
        clearInterval(intervalRef.current); // Stop auto-slide when user interacts
        setFadeOut(true);

        setTimeout(() => {
            setCurrent(index);
            setFadeOut(false);
            setFadeIn(true);

            setTimeout(() => {
                setFadeIn(false);
            }, 1500);

            startInterval(); // Restart auto-slide after user interaction
        }, 1500);
    };

    const handleImageClick = (image) => {
        setPopupImage(image);
    };

    const handleClosePopup = () => {
        setPopupImage(null);
    };

    return (
        <section className="slider">
            <div className="slider-images">
                <img
                    src={images[current]}
                    alt={`img-${current}`}
                    className={`slider-image ${fadeOut ? 'fade-out' : fadeIn ? 'fade-in' : ''}`}
                    onClick={() => handleImageClick(images[current])}
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
            <div className={`popup ${popupImage ? '' : 'hidden'}`}>
                <img src={popupImage} alt={popupImage} className="popup__img" />
                <FontAwesomeIcon className="popup__close" icon={faX} onClick={handleClosePopup} />
            </div>
        </section>
    );
};

export default HomeSlider;
