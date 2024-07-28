import React, {useState} from 'react';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';

const ProjectsMain = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const images = [img1, img2, img3];

    return (
        <section className="projects_main">
            <div className="container">
                <h1>Nasze Realizacje</h1>

                <div className="projects_container">
                    <h2>Realizajce Montażu</h2>
                    <p className="p_desktop">Najedź aby zobaczyć opis</p>
                    <p className="p_phone">Kliknij aby zobaczyć zdjęcie</p>
                    <div className="projects">
                    {images.map((img, index) => (

                            <div
                                key={index}
                                className={`project ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleClick(index)}
                            >
                                <div className="img-wrapper" style={{backgroundImage: `url(${img})`}}>
                                    <button>Zobacz !</button>
                                </div>
                                <p className={`description ${activeIndex === index ? 'show' : ''}`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                </p>

                        </div>
                    ))}
                    </div>
                </div>
                <div className="projects_container">
                    <h2>Realizacje Renowacji</h2>
                    <div className="projects">
                    <div className="project"></div>
                    </div>
                </div>
                <div className="projects_container">
                    <h2>Inne Realizacje</h2>
                    <div className="projects">
                    <div className="project"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsMain;
