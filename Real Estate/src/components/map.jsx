import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const onMarkerClick = () => {
    // Handle marker click event
  };

  const onInfoWindowClose = () => {
    // Handle info window close event
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      className="map"
    >
      <Marker onClick={onMarkerClick} name={"Current location"} />
      <InfoWindow onClose={onInfoWindowClose}>
        <div>
          <h1>{selectedPlace?.name}</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCA8R3ofQKc9PM3Jo3uz2d7A_7mD0aUDwQ",
})(MapContainer);
