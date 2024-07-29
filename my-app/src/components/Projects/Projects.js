import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import ProjectsMain from "./Projects_Main";
import Title from "../Title";

const Projects = () => {
    return (
        <section>
            <Header/>
            <Title h1={"Nasze Realizacje"} p={"Drodzy Państwo tutaj znajdziecie zdjęcia z naszych realizacji"}/>
            <ProjectsMain/>
            <Footer/>
        </section>
    );
};

export default Projects;