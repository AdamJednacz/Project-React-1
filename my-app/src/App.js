import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import bg from "./components/assets/biały_marmur.avif";
import './App.scss';
import Loading from "./components/Loading";

const Home = lazy(() => import("./components/Home/Home"));
const Offer = lazy(() => import("./components/Offer/Offer"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/onas' element={<AboutUs/>}/>
                    <Route path='/oferta' element={<Offer/>}/>
                    <Route path='/realizacje' element={<Projects/>}/>
                    <Route path='/realizacje/:id' element={<Projects/>}/>
                    <Route path='/kontakt' element={<Contact/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    overflow: 'hidden'
};

export default App;
