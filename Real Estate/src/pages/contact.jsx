import React from "react";
import ContactForm from "../components/form.jsx";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

const Contact = () => {
  return (
    <div>
      <Nav />
      <h1 className="contact-text">
        Interested? Enter your contact information below and an agent will get
        in touch!
      </h1>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
