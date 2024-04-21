import React from "react";
import Nav from "../components/nav.jsx";
import Table from "../components/table.jsx"
import Footer from "../components/footer.jsx"
import SmoothScrollArrow from "../components/arrow.jsx";


const Houses = () => {
    return (
        <div className="home">
            <Nav />
            <p className="home-paragraph">Homes for sale in the United States</p>
            <Table />
            <SmoothScrollArrow />
            <Footer />
        </div>
    );
};

export default Houses;