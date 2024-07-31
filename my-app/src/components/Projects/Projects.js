import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import ProjectsMain from "./Projects_Main";
import Title from "../Title";

const Projects = () => {
    // Extract the 'id' parameter from the URL
    const { id } = useParams();

    return (
        <section>
            <Header />
            <Title
                h1={"Nasze Realizacje"}
                p={"Drodzy Państwo tutaj znajdziecie zdjęcia z naszych realizacji. Gwiazdka* przy nazwie oznacza że zostaną wyświetlone wszystkie zdjęcia z danej kategorii"}
            />
            <ProjectsMain id={id} />
            <Footer />
        </section>
    );
};

export default Projects;
