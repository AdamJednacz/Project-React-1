import React, {lazy} from 'react';
import { useParams } from 'react-router-dom';



const Header = lazy(() => import("../Header"));
const Footer = lazy(() => import("../Footer"));
const Title = lazy(() => import("../Title"));
const ProjectsMain = lazy(() => import("../Projects/Projects_Main"));
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
