import { useEffect } from "react";

function FindCenter({  myAddress, friendsAddress, setCenter }) {

    function getMidpoint(lat1, lon1, lat2, lon2) {
        console.log("Getting midpoint");
        // Convert latitude and longitude from degrees to radians
        lat1 = (lat1 * Math.PI) / 180;
        lon1 = (lon1 * Math.PI) / 180;
        lat2 = (lat2 * Math.PI) / 180;
        lon2 = (lon2 * Math.PI) / 180;
    
        // Calculate differences
        const dLon = lon2 - lon1;
    
        // Calculate Cartesian coordinates for the two points
        const x = Math.cos(lat2) * Math.cos(dLon);
        const y = Math.cos(lat2) * Math.sin(dLon);
    
        // Calculate the midpoint latitude and longitude in radians
        const midLat = Math.atan2(
            Math.sin(lat1) + Math.sin(lat2),
            Math.sqrt((Math.cos(lat1) + x) ** 2 + y ** 2)
        );
        const midLon = lon1 + Math.atan2(y, Math.cos(lat1) + x);
    
        // Convert the midpoint coordinates from radians to degrees
        return {
            location: {
                lat: (midLat * 180) / Math.PI,
                lng: (midLon * 180) / Math.PI
            },
            zoom: 14,
            default: false   
        };
    }
    
    useEffect(() => {
        if ( myAddress && friendsAddress ) {
            const midpoint = getMidpoint(myAddress.geometry.location.lat(), myAddress.geometry.location.lng(),
                        friendsAddress.geometry.location.lat(), friendsAddress.geometry.location.lng());
            setCenter(midpoint);
        }
    }, [myAddress, friendsAddress, setCenter]);

    return null;
}

export default FindCenter;