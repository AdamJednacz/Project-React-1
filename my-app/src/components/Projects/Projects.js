import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import ProjectsMain from "./Projects_Main";
import Title from "../Title";

const Projects = () => {
    return (
        <section>
            <Header/>
            <Title h1={"Nasze Realizacje"} p={"Lorem ipsum dolor"}/>
            <ProjectsMain/>
            <Footer/>
        </section>
    );
};

export default Projects;