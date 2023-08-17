import Google from "@/components/Google/Google";
import MapComponent from "@/components/Google/MapComponent";
import { Box, Paper } from "@mui/material";
import { useState } from "react";

function Place() {

    const [coordinates, setCoordinates] = useState();
    const [toCoordinates, setToCoordinates] = useState();
    const [showMap, setShowMap] = useState(false);

    return (
        <>

            <Box sx={{ backgroundImage: 'linear-gradient(45deg,#3023ae,#f09)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper sx={{ width: '500px', padding: '25px' }}>

                    {showMap ? (
                        <Google coordinates={coordinates} toCoordinates={toCoordinates} />
                    ) : (
                        <MapComponent setCoordinates={setCoordinates} setToCoordinates={setToCoordinates} setShowMap={setShowMap} />
                    )}

                </Paper>
            </Box>


        </>

    );
}

export default Place;