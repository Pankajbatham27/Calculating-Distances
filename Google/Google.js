import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function Google({ coordinates, toCoordinates }) {
    const mapRef = useRef(null);

    const [distance, setDistance] = useState();

    useEffect(() => {
        const initMap = () => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });

            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer({
                map: map,
            });

            const startLatLng = new window.google.maps.LatLng(coordinates.lat, coordinates.lng);
            const endLatLng = new window.google.maps.LatLng(toCoordinates.lat, toCoordinates.lng);

            const request = {
                origin: startLatLng,
                destination: endLatLng,
                travelMode: window.google.maps.TravelMode.DRIVING,
            };

            directionsService.route(request, (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(result);

                    // Calculate the distance in kilometers
                    const distance = result.routes[0].legs[0].distance.text;

                    
                    setDistance(distance);
                    // Display the distance on the map near the middle of the route
                    const middleIndex = Math.floor(result.routes[0].overview_path.length / 2);
                    const middleLatLng = result.routes[0].overview_path[middleIndex];
                    const distanceInfo = `Distance: ${distance}`;
                    


                    const infoWindow = new window.google.maps.InfoWindow({
                        content: distanceInfo,
                        position: middleLatLng,
                    });

                    infoWindow.open(map);

                    // Center map on the route
                    map.fitBounds(result.routes[0].bounds);
                }
            });
        };
        initMap();
    }, []);

    return (
        <>
            <Typography mb={2} variant='h5'><b>Distances: <u>{distance}</u></b></Typography>
            <div style={{ width: "100%", height: "300px" }}>
                <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
            </div>
        </>
    );
}

export default Google;