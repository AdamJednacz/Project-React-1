import React from 'react';
// Import images
import beton_1 from '../assets/beton_1.jpg';
import beton_2 from '../assets/beton_2.jpg';
import beton_3 from '../assets/beton_3.jpg';
import beton_4 from '../assets/beton_4.jpg';
import beton_5 from '../assets/beton_5.jpg';
import beton_6 from '../assets/beton_6.jpg';
import beton_7 from '../assets/beton_7.jpg';
import beton_8 from '../assets/beton_8.jpg';
import beton_9 from '../assets/beton_9.jpg';
import beton_elewacje_1 from '../assets/beton_elewacje_1.jpg';
import beton_elewacje_2 from '../assets/beton_elewacje_2.jpg';
import beton_elewacje_3 from '../assets/beton_elewacje_3.jpg';
import beton_elewacje_4 from '../assets/beton_elewacje_4.jpg';
import beton_elewacje_5 from '../assets/beton_elewacje_5.jpg';
import blat_1 from '../assets/blat_łazienkowy.jpg';
import blat_2 from '../assets/blat_kuchenny.jpg';
import m_a_1 from '../assets/m_architektura_1.jpg';
import m_a_2 from '../assets/m_architektura_2.jpg';
import m_a_3 from '../assets/m_architektura_3.jpg';
import piask_elewacje_1 from '../assets/piask_elewacje_1.jpg';
import piask_elewacje_2 from '../assets/piask_elewacje_2.jpg';
import piask_elewacje_3 from '../assets/piask_elewacje_3.jpg';
import piask_elewacje_4 from '../assets/piask_elewacje_4.jpg';
import renowacja_1_przed from '../assets/renowacja_1_przed.jpg';
import renowacja_1_po from '../assets/renowacja_1_po.jpg';
import renowacja_2_przed from '../assets/renowacja_2_przed.JPG';
import renowacja_2_po from '../assets/renowacja_2_po.JPG';
import renowacja_3_przed from '../assets/renowacja_3_przed.jpg';
import renowacja_3_po from '../assets/renowacja_3_po.jpg';
import renowacja_4_przed from '../assets/renowacja_4_przed.jpg';
import renowacja_4_po from '../assets/renowacja_4_po.jpg';
import renowacja_5_przed from '../assets/renowacja_5_przed.JPG';
import renowacja_5_po from '../assets/renowacja_5_po.JPG';

// Create a mapping from JSON keys to image imports
const imageMap = {
    beton_architektoniczny: [beton_1, beton_2, beton_3, beton_4, beton_5, beton_6, beton_7, beton_8, beton_9],
    beton_elewacje: [beton_elewacje_1, beton_elewacje_2, beton_elewacje_3, beton_elewacje_4, beton_elewacje_5],
    blaty: [blat_1, blat_2],
    mała_architektura: [m_a_1, m_a_2, m_a_3],
    piask_elewacje: [piask_elewacje_1, piask_elewacje_2, piask_elewacje_3, piask_elewacje_4],
    renowacje: [
        { before: renowacja_1_przed, after: renowacja_1_po },
        { before: renowacja_2_przed, after: renowacja_2_po },
        { before: renowacja_3_przed, after: renowacja_3_po },
        { before: renowacja_4_przed, after: renowacja_4_po },
        { before: renowacja_5_przed, after: renowacja_5_po }
    ]
};

const ProjectsImgs = ({ selectedOption1, selectedOption2, showRenovations, onImageClick }) => {
    const getImagesForOption = (option) => {
        return imageMap[option] || [];
    };

    const renderImages = (images) => {
        return images.map((image, index) => (
                <img
                    src={image}
                    alt={`Image ${index}`}
                    className="project_img"
                    onClick={() => onImageClick(image)}
                />

        ));
    };

    return (
        <div className="projects_imgs">
            {selectedOption1 !== 'montaż_kamienia' && (
                <div className={`image_gallery ${selectedOption1 ? 'show' : 'hide'}`}>
                    {renderImages(getImagesForOption(selectedOption1))}
                </div>
            )}

            {selectedOption2 !== 'montaż_inne' && (
                <div className={`image_gallery ${selectedOption2 ? 'show' : 'hide'}`}>
                    {renderImages(getImagesForOption(selectedOption2))}
                </div>
            )}

            {showRenovations && (
                <div className="image_gallery">
                    {getImagesForOption('renowacje').map((renovation, index) => (
                        <div key={index} className="renovation_images_container">
                            <div className="renovation_images">
                                <img
                                    src={renovation.before}
                                    alt={`Renovation Before ${index}`}
                                    className="renovation_img"
                                    onClick={() => onImageClick(renovation.before)}
                                />
                                <h1>Przed</h1>
                            </div>
                            <div className="renovation_images">
                                <img
                                    src={renovation.after}
                                    alt={`Renovation After ${index}`}
                                    className="renovation_img"
                                    onClick={() => onImageClick(renovation.after)}
                                />
                                <h1>Po</h1>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectsImgs;
