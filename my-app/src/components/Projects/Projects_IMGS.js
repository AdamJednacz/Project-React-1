import React, { useState, useEffect, useMemo } from 'react';

// Dynamic import of images
const importImages = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
};

const images = importImages(require.context('../assets', false, /\.(avif)$/));

const ProjectsImgs = ({ selectedOption1, selectedOption2, showRenovations, onImageClick }) => {
    const [loadedImages, setLoadedImages] = useState([]);

    const imageMap = useMemo(() => ({
        parapety: ['beton_5.avif', 'beton_6.avif', 'beton_2.avif', 'beton_1.avif', 'beton_3.avif', 'beton_4.avif', 'beton_7.avif'],
        schody: ['schody_1.avif', 'schody_2.avif', 'schody_3.avif', 'schody_4.avif'],
        elewacje: [],
        blaty: ['blat_łazienkowy.avif', 'blat_kuchenny.avif'],
        mała_architektura: ['m_architektura_1.avif', 'm_architektura_2.avif', 'm_architektura_3.avif'],
        beton_architektoniczny: ['beton_elewacje_1.avif', 'beton_elewacje_2.avif', 'beton_elewacje_3.avif', 'beton_elewacje_4.avif', 'beton_elewacje_5.avif', 'piask_elewacje_1.avif', 'piask_elewacje_2.avif', 'piask_elewacje_3.avif', 'piask_elewacje_4.avif', 'beton_9.avif'],
        beton_elewacje: [],
        renowacje: [
            { before: 'renowacja_1_przed.avif', after: 'renowacja_1_po.avif' },
            { before: 'renowacja_2_przed.avif', after: 'renowacja_2_po.avif' },
            { before: 'renowacja_3_przed.avif', after: 'renowacja_3_po.avif' },
            { before: 'renowacja_4_przed.avif', after: 'renowacja_4_po.avif' },
            { before: 'renowacja_5_przed.avif', after: 'renowacja_5_po.avif' }
        ]
    }), []);

    useEffect(() => {
        const loadImage = (image) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = images[image];
                img.onload = () => resolve(img);
            });
        };

        const loadImages = async () => {
            let imagesToLoad = [];
            if (selectedOption1) {
                imagesToLoad = imagesToLoad.concat(imageMap[selectedOption1]);
            }
            if (selectedOption2) {
                imagesToLoad = imagesToLoad.concat(imageMap[selectedOption2]);
            }
            if (showRenovations) {
                imagesToLoad = imagesToLoad.concat(imageMap.renowacje.map(r => r.before).concat(imageMap.renowacje.map(r => r.after)));
            }
            const loaded = await Promise.all(imagesToLoad.map(loadImage));
            setLoadedImages(loaded.map(img => img.src));
        };

        loadImages();
    }, [selectedOption1, selectedOption2, showRenovations, imageMap]);

    const renderImages = (imagePaths) => {
        if (imagePaths.length === 0) {
            return <h1 className="in_work">Prace są w toku...</h1>;
        }
        return imagePaths.map((image, index) => (
            <img
                loading="lazy"
                key={index}
                src={images[image]}
                alt={`Image ${index}`}
                className="project_img"
                onClick={() => onImageClick(images[image])}
            />
        ));
    };

    const getImagesForOption = (option) => {
        return imageMap[option] || [];
    };

    const getAllImages = (options) => {
        return options.reduce((allImages, option) => {
            return allImages.concat(imageMap[option] || []);
        }, []);
    };

    const allKamienOptions = ['parapety', 'schody', 'elewacje', 'blaty', 'mała_architektura'];
    const allInneOptions = ['beton_architektoniczny', 'beton_elewacje', 'piask_elewacje'];

    const imagesToShow1 = selectedOption1 === 'montaż_kamienia*' ? getAllImages(allKamienOptions) : getImagesForOption(selectedOption1);
    const imagesToShow2 = selectedOption2 === 'montaż_beton*' ? getAllImages(allInneOptions) : getImagesForOption(selectedOption2);

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
                                    src={images[renovation.before]}
                                    alt={`Renovation Before ${index}`}
                                    className="renovation_img"
                                    onClick={() => onImageClick(images[renovation.before])}
                                />
                                <h1>Przed</h1>
                            </div>
                            <div className="renovation_images">
                                <img
                                    loading="lazy"
                                    src={images[renovation.after]}
                                    alt={`Renovation After ${index}`}
                                    className="renovation_img"
                                    onClick={() => onImageClick(images[renovation.after])}
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

