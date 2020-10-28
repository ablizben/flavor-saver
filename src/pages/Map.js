import React from "react";
import "../App.css";
import Header from "../components/Header";
import LocationMap from "../components/LocationMap";
import Footer from "../components/Footer";


function Map() {
    return (
        <div>
            <Header />
            <LocationMap />
            <Footer />
        </div>
    )
}

export default Map;
