import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationCityOutlinedIcon } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({ setCordinates, setBounds,  cordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAh79vb4f_QZuyLUukLtV-vP8jLKVDJsTI" }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}></GoogleMapReact>
    </div>
  );
};

export default Map;
