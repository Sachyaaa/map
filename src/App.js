import { CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getPlacesData } from './Api';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

const App = () => {

    const [places, setPlaces] = useState([]);
    const [cordinates, setCordinates] = useState({});
    const [bounds, setBounds] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCordinates({ lat: latitude, lng: longitude });
        })
    }, [])

    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data);
            })

    }, [cordinates, bounds])


    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Map
                        setBounds={setBounds}
                        setCordinates={setCordinates}
                        cordinates={cordinates} />
                </Grid>
            </Grid>

        </>
    );
}

export default App;