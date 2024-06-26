import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const { latitude, longitude } = props;


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
      initialCenter={{ lat: props.latitude, lng: props.longitude }}

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
  apiKey: "Your_Google_Maps_API_Key",
})(MapContainer);
