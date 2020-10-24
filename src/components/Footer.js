import React from "react";

function Footer() {
    return (
        <footer className="row m-0 fixed-bottom">
            <a href="search.html" className="search col-6 text-center">
                <i className="fas fa-search"></i> Search
            </a>
            <a href="/add-post" className="new-post col-6 text-center">
                <i className="far fa-plus"></i> New Post
            </a>
        </footer>
    );
}

export default Footer;
