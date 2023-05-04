import React, { useState } from "react";
// React router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing all pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/traniers/Trainers";

//import Layout
import NavBar from "./Layout/Navbar/NavBar";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
