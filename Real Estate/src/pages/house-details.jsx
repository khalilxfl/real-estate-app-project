import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import GoogleMap from "../components/map.jsx";

const HouseDetails = () => {
  const { id } = useParams();
  const [houseDetails, setHouseDetails] = useState(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await fetch(
          "https://b59b889f-5c7e-4f3b-9ac6-4abdcf66b5bf.mock.pstmn.io/properties"
        );
        const data = await response.json();
        const house = data.find((house) => house.id === id);
        setHouseDetails(house);
      } catch (error) {
        console.error("Error fetching house details:", error);
      }
    };

    fetchHouseDetails();
  }, [id]);

  if (!houseDetails) return <div>Loading...</div>;

  const { pic, cost, details, location, contactPhoneNumber, latitude, longitude } = houseDetails;
  
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);

  return (
    <div className="house-details-container">
      <Nav />
      <div className="content-container">
        <div className="image-and-text-container">
          <img src={pic} alt="House" className="house-detail-pic" />
          <div className="text-details">
            <h2>{cost}</h2>
            <h4>Details: {details}</h4>
            <h4>Location: {location}</h4>
            <h4>Contact Phone Number: {contactPhoneNumber}</h4>
          </div>
        </div>
        {isNaN(latitude) || isNaN(longitude) ? (
          <div>Error: Invalid coordinates</div>
        ) : (
          <GoogleMap latitude={latitude} longitude={longitude} />
        )}
      </div>
      <div className="footer-details">
        <Footer />
      </div>
    </div>
  );
};

export default HouseDetails;