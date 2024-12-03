import React, { useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import "../assests/Map.css";


function MapBox({ center, setResultsRadius }) {
    const ID = `${center}_MAP_ID`;

  useEffect(() => {
    console.log("New center Map");
  }, [center]);

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
            {!center.default && (
              <AdvancedMarker position={center.location}>
              <Pin
                background={"#0f9d58"}
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
