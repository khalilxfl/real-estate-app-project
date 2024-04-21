import React, { useState, useEffect } from "react";

const AboutBackground = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data);
        setName(data.name);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="containerAbout">
      <div className="Nav">
        <div>
          <div className="about-content">
            <p className="about-header">Hey {name} thanks for signing up!</p>
            <h2 className="section-title">Who Are We?</h2>
            <p className="section-content">
              Real Estate Masters is a premier real estate agency specializing
              in residential and commercial properties. With a wealth of
              experience in the industry, we are dedicated to helping
              individuals and businesses achieve their real estate goals.
            </p>
            <p className="section-content">
              Our team of expert agents is committed to providing personalized
              service, tailored to meet the unique needs of each client. Whether
              you are buying, selling, or investing, we are here to guide you
              every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBackground;
