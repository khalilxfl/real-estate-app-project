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
          "https://685c2149-6f11-441f-97d9-3b1fdc253994.mock.pstmn.io/properties"
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

  const { pic, cost, details, location, contactPhoneNumber } = houseDetails;

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
        <GoogleMap />
      </div>
      <div className="footer-details">
        <Footer />
      </div>
    </div>
  );
};

export default HouseDetails;
