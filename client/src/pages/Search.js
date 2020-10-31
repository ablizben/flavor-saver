import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import { searchForLocation } from "../api/google-maps";

function Search() {

    const [showMenu, setShowMenu] = useState(false);
    const [locationQuery, setLocationQuery] = useState('');
    const [locationResults, setLocationResults] = useState([]);
        
    useEffect(() => {}, [showMenu]);

    const updateLocationQuery = async (event) => {
        const { target: { value } } = event;
        setLocationQuery(value);
        const locationResults = await searchForLocation(value);
        setLocationResults(locationResults);
        setShowMenu(!!value);
    }

    return (
        <div className="container">
            <Header />
            <div className="body-content row d-flex justify-content-center">
                <div className="col-12">
                    <form>
                        <div className="form-group">
                            <div className="input-wrap">
                                <i className="fas fa-search"></i>
                                <input onKeyUp={updateLocationQuery} id="search" name="search" type="text" className="form-control search" placeholder="Search" aria-label="Search Bar" aria-describedby="search" />
                            </div>
                        </div>
                    </form>

                    {showMenu ? (
                        <SearchResults locationResults={locationResults} />
                    ) : (
                        <div className="search-instructions text-center d-flex align-items-center">
                            <div className="w-100">
                                <div className="search-icon">
                                    <i className="far fa-search"></i>
                                </div>
                                <p>Search for names, usernames, locations, or hashtags</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <Footer />
            <div id="map" />
        </div>
    );

}

export default Search;
