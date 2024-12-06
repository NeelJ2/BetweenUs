import React, { useEffect } from "react";
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import "../assests/Map.css";

function MapBox({ center, setResultsRadius, myAddress, friendsAddress, selectedPlace }) {
    const ID = `${center}_MAP_ID`;

  useEffect(() => {
    console.log("New center Map");
  }, [center]);

  useEffect(() => {
    // if (selectedPlace){
    //   center.location = {
    //     lat: selectedPlace.geometry.location.lat(),
    //     lng: selectedPlace.geometry.location.lng()} 
    //   center.zoom = 19
    // }
  }, [selectedPlace]);

  const updateResultsRadius = async () => {
    setResultsRadius(document.getElementById("Search_Radius").value);
  };

  window.updateResultsRadius = updateResultsRadius;
  return (
    <div className="Map">
      <div className="Map_Header">
        <p className="Colored_Text">Search Radius</p>
        <select
          name="Search_Radius"
          id="Search_Radius"
          onChange={updateResultsRadius}
        >
          <option value="1609">1 mile</option>
          <option value="4828">3 miles</option>
          <option value="8046">5 miles</option>
        </select>
      </div>
      <div className="Map_Box">
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE}>
          <Map
            defaultCenter={center.location}
            center={center.location}
            zoom={center.zoom}
            mapId = {ID}
          >
            {!center.default && !selectedPlace && (
              <AdvancedMarker position={center.location}>
              <Pin
                background={"#0f9d58"}
                borderColor={"#006425"}
                glyphColor={"#60d98f"}
              />
            </AdvancedMarker>
            )}
            {!center.default && myAddress && !selectedPlace && (
                <AdvancedMarker position={{lat: myAddress.geometry.location.lat(),
                                           lng: myAddress.geometry.location.lng()}}>
                <Pin
                  background={"#fc0b0b"}
                  borderColor={"#006425"}
                  glyphColor={"#60d98f"}
                />
              </AdvancedMarker>
            )}
            {!center.default && friendsAddress && !selectedPlace && (
                <AdvancedMarker position={{lat: friendsAddress.geometry.location.lat(),
                                           lng: friendsAddress.geometry.location.lng()}}>
                <Pin
                  background={"#0b17fc"}
                  borderColor={"#006425"}
                  glyphColor={"#60d98f"}
                />
              </AdvancedMarker>
            )}
            {!center.default && selectedPlace && (
                <AdvancedMarker position={{lat: selectedPlace.geometry.location.lat(),
                                           lng: selectedPlace.geometry.location.lng()}}>
                <Pin
                  background={"#0b17fc"}
                  borderColor={"#006425"}
                  glyphColor={"#60d98f"}
                />
              </AdvancedMarker>
            )}
          </Map>
        </APIProvider>
      </div>
    </div>
  );
}

export default MapBox;
