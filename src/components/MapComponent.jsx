import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapComponent({ location }) {
  const mapContainerStyle = {
    width: "100%",
    height: "400px"
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA5rTXeNyj-pedea-fXoPeVIiF4EXs-gxc">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={location}
        zoom={12}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
