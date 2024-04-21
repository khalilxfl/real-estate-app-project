// Table.jsx
import React, { useState, useEffect } from "react";
import Card from "./card.jsx";

const Table = () => {
  const [properties, setProperties] = useState([]);
  const [bedroomFilter, setBedroomFilter] = useState("all");

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('https://b59b889f-5c7e-4f3b-9ac6-4abdcf66b5bf.mock.pstmn.io/properties');
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleBedroomFilterChange = (newFilter) => {
    setBedroomFilter(newFilter);
  };

  const filteredProperties = properties.filter(property => (
    bedroomFilter === "all" || parseInt(property.details.charAt(0)) === parseInt(bedroomFilter)
  ));

  return (
    <div>
      <div className="filter">
        <h1 className="filter-text">Filter: </h1>
        <button className="filter-button" onClick={() => handleBedroomFilterChange("all")}>All Bedrooms</button>
        <button className="filter-button" onClick={() => handleBedroomFilterChange("1")}>1 Bedroom</button>
        <button className="filter-button" onClick={() => handleBedroomFilterChange("2")}>2 Bedrooms</button>
        <button className="filter-button" onClick={() => handleBedroomFilterChange("3")}>3 Bedrooms</button>
      </div>

      <div className="table">
        {filteredProperties.map((property, index) => (
          <Card
            key={index}
            id={property.id} 
            pic={property.pic}
            cost={property.cost}
            details={property.details}
            location={property.location}
            latitude={property.latitude}
            longitude={property.longitude}

          />
        ))}
      </div>
    </div>
  );
};

export default Table;
