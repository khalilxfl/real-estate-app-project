import React, { useState, useEffect } from "react";
import ContactForm from "../components/form.jsx";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import AboutBackground from "../components/aboutBackground.jsx";

const About = () => {
  return (
    <div>
      <Nav />
      <AboutBackground />
      <Footer />
    </div>
  );
};

export default About;
