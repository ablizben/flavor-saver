import React from "react";
import Header from "../components/Header";
import LocationMap from "../components/LocationMap";
import Grid from "../components/Grid";

function Location() {
    return (
        <div className="container">
        <Header />
        <LocationMap />
        <Grid />
        <Footer />
        </div>
    )
}



export default Location();