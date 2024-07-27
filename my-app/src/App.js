
import './App.scss';

import Home from "./components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Offer from "./components/Offer/Offer";
import AboutUs from "./components/AboutUs/AboutUs";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import bg from "./components/assets/biały_marmur.jpg";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/onas' element={<AboutUs/>}/>
              <Route path='/oferta' element={<Offer/>}/>
              <Route path='/realizacje' element={<Projects/>}/>
              <Route path='/kontakt' element={<Contact/>}/>

          </Routes>


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
