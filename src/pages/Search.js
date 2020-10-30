import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MetaData from "../components/MetaData";
import { render } from "@testing-library/react";

function Search() {

    const [showMenu, setShowMenu] = useState(false);
        
    useEffect(() => {}, [showMenu]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
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
                                <input onKeyUp={toggleMenu} id="search" type="text" className="form-control search" placeholder="Search" aria-label="Search Bar" aria-describedby="search" />
                            </div>
                        </div>
                    </form>

                    {showMenu ? (
                        <ul className="search-results">
                            <MetaData link="#" type="hashtag" term="baltimore" />
                            <MetaData link="#" type="location" term="Baltimore, Maryland" />
                            <MetaData link="#" type="profile" term="baltimoremuseumofart" meta="The Baltimore Museum of Art" />
                            <MetaData link="#" type="hashtag" term="baltimore" />
                            <MetaData link="#" type="location" term="Baltimore, Maryland" />
                        </ul>
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
        </div>
    );

}

export default Search;
