import React from 'react';
// Import images
import beton_1 from '../assets/beton_1.avif';
import beton_2 from '../assets/beton_2.avif';
import beton_3 from '../assets/beton_3.avif';
import beton_4 from '../assets/beton_4.avif';
import beton_5 from '../assets/beton_5.avif';
import beton_6 from '../assets/beton_6.avif';
import beton_7 from '../assets/beton_7.avif';
import beton_9 from '../assets/beton_9.avif';
import beton_elewacje_1 from '../assets/beton_elewacje_1.avif';
import beton_elewacje_2 from '../assets/beton_elewacje_2.avif';
import beton_elewacje_3 from '../assets/beton_elewacje_3.avif';
import beton_elewacje_4 from '../assets/beton_elewacje_4.avif';
import beton_elewacje_5 from '../assets/beton_elewacje_5.avif';
import blat_1 from '../assets/blat_łazienkowy.avif';
import blat_2 from '../assets/blat_kuchenny.avif';
import m_a_1 from '../assets/m_architektura_1.avif';
import m_a_2 from '../assets/m_architektura_2.avif';
import m_a_3 from '../assets/m_architektura_3.avif';
import piask_elewacje_1 from '../assets/piask_elewacje_1.avif';
import piask_elewacje_2 from '../assets/piask_elewacje_2.avif';
import piask_elewacje_3 from '../assets/piask_elewacje_3.avif';
import piask_elewacje_4 from '../assets/piask_elewacje_4.avif';
import renowacja_1_przed from '../assets/renowacja_1_przed.avif';
import renowacja_1_po from '../assets/renowacja_1_po.avif';
import renowacja_2_przed from '../assets/renowacja_2_przed.avif';
import renowacja_2_po from '../assets/renowacja_2_po.avif';
import renowacja_3_przed from '../assets/renowacja_3_przed.avif';
import renowacja_3_po from '../assets/renowacja_3_po.avif';
import renowacja_4_przed from '../assets/renowacja_4_przed.avif';
import renowacja_4_po from '../assets/renowacja_4_po.avif';
import renowacja_5_po from '../assets/renowacja_5_po.avif';
import renowacja_5_przed from '../assets/renowacja_5_przed.avif';
import schody_1 from '../assets/schody_1.avif'
import schody_2 from '../assets/schody_2.avif'
import schody_3 from '../assets/schody_3.avif'
import schody_4 from '../assets/schody_4.avif'

// Create a mapping from JSON keys to image imports
const imageMap = {

        parapety:[beton_5, beton_6 ,beton_2,beton_1,beton_3  ,beton_4,beton_7,],
        schody:[schody_1,schody_2,schody_3,schody_4],
        elewacje:[],
        blaty: [blat_1, blat_2],
        mała_architektura: [m_a_1, m_a_2, m_a_3],

        beton_architektoniczny: [beton_elewacje_1, beton_elewacje_2, beton_elewacje_3, beton_elewacje_4, beton_elewacje_5,piask_elewacje_1, piask_elewacje_2, piask_elewacje_3, piask_elewacje_4, beton_9],
        beton_elewacje: [],




    renowacje: [
        { before: renowacja_1_przed, after: renowacja_1_po },
        { before: renowacja_2_przed, after: renowacja_2_po },
        { before: renowacja_3_przed, after: renowacja_3_po },
        { before: renowacja_4_przed, after: renowacja_4_po },
        { before: renowacja_5_przed, after: renowacja_5_po }
    ],

};

const ProjectsImgs = ({ selectedOption1, selectedOption2, showRenovations, onImageClick }) => {
    const getImagesForOption = (option) => {
        return imageMap[option] || [];
    };
    const getAllImages = (options) => {
        return options.reduce((allImages, option) => {
            return allImages.concat(imageMap[option] || []);
        }, []);
    };
    const renderImages = (images) => {
        if (images.length === 0) {
            return <h1 className="in_work">Prace są w toku...</h1>;
        }
        return images.map((image, index) => (
            <img
                loading="lazy"
                key={index}
                src={image}
                alt={`Image ${index}`}
                className="project_img"
                onClick={() => onImageClick(image)}

            />
        ));
    };

    const allKamienOptions = ['parapety', 'schody', 'elewacje', 'blaty', 'mała_architektura'];
    const allInneOptions = ['beton_architektoniczny', 'beton_elewacje', 'piask_elewacje'];

    const imagesToShow1 = selectedOption1 === 'montaż_kamienia*'  ? getAllImages(allKamienOptions) : getImagesForOption(selectedOption1);
    const imagesToShow2 = selectedOption2 === 'montaż_beton*'  ? getAllImages(allInneOptions) : getImagesForOption(selectedOption2);

    return (
        <div className="projects_imgs">

            {selectedOption1 !== 'montaż_kamienia' && (

                <div className={`image_gallery ${selectedOption1 ? 'show' : 'hide'}`}>
                    {renderImages(imagesToShow1)}
                </div>
            )}

            {selectedOption2 !== 'montaż_beton' && (
                <div className={`image_gallery ${selectedOption2 ? 'show' : 'hide'}`}>
                    {renderImages(imagesToShow2)}
                </div>
            )}

            {showRenovations && (
                <div className="image_gallery">
                    {imageMap.renowacje.map((renovation, index) => (
                        <div key={index} className="renovation_images_container">
                            <div className="renovation_images">
                                <img
                                    loading="lazy"
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