import React, { useEffect, useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { Circle } from "./Circle";
import "../assests/Map.css";

function MapBox({ center, setResultsRadius, myAddress, friendsAddress, selectedPlace, resultsRadius, setSelectedPlace }) {
  const [localCenter, setLocalCenter] = useState(center.location);
  const [localZoom, setLocalZoom] = useState(center.zoom);

  const ID = `${center}_MAP_ID`;

  // Update center from getMidpoint()
  useEffect(() => {
    setLocalCenter(center.location);
    setLocalZoom(center.zoom);
  }, [center]);

  // Update center from map drag
  const handleCameraChange = (event) => {
    const { detail } = event;
    setLocalCenter(detail.center);
    setLocalZoom(detail.zoom);
  };

  useEffect(() => {
    console.log("New center Map");
    setSelectedPlace(null);
  }, [center, setSelectedPlace]);

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
            center={localCenter}
            zoom={localZoom}
            mapId={ID}
            onCameraChanged={handleCameraChange}
          >
            <Circle
            radius={resultsRadius * 2}// 1 mile: 3218, 3 miles: 9656, 5 miles: 16093
            center={center.location}
            strokeColor={'#0c4cb3'}
            strokeOpacity={1}
            strokeWeight={3}
            fillColor={'#3b82f6'}
            fillOpacity={0.3}
          />
            {/* My address marker */}
            {!center.default && myAddress && (
                <AdvancedMarker position={{lat: myAddress.geometry.location.lat(),
                                           lng: myAddress.geometry.location.lng()}}>
                <Pin
                  background={"#FBBC04"}
                  borderColor={"#000"}
                  glyphColor={"#000"}
                />
              </AdvancedMarker>
            )}
            {/* Friend's marker */}
            {!center.default && friendsAddress && (
                <AdvancedMarker position={{lat: friendsAddress.geometry.location.lat(),
                                           lng: friendsAddress.geometry.location.lng()}}>
                <Pin
                background={"#0f9d58"}
                borderColor={"#006425"}
                glyphColor={"#60d98f"}
              />
              </AdvancedMarker>
            )}
            {/* Selected place marker */}
            {!center.default && selectedPlace && (
                <AdvancedMarker position={{lat: selectedPlace.geometry.location.lat(),
                                           lng: selectedPlace.geometry.location.lng()}}>
              </AdvancedMarker>
            )}
          </Map>
        </APIProvider>
      </div>
    </div>
  );
}

export default MapBox;
