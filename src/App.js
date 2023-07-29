import React from "react";
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";
import About from "./Component/About";
import Qualification from "./Component/Qualification";
import Skill from "./Component/Skill";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import ScrollToTop from "./Component/ScrollToTop";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>

      <ScrollToTop />

      <Header />
    
      <Routes>

        <Route path="/Home" exact element={<Banner /> } />
        <Route path="/About" exact element={<About />} />
        <Route path="/Qualification" exact element={<Qualification />} />
        <Route path="Skills" exact element={[<Skill/>,<Project/>]} />
        <Route path="/Contact" exact element={<Contact />} />
        <Route path="/" exact element={<Banner /> } />


      </Routes>

      

      <Footer />

    </>
  );
}

export default App;
