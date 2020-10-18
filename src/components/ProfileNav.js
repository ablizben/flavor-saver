import React from "react";

function ProfileNav(props) {
    return (
        <div className="profile-nav row d-flex justify-content-center text-center">
            <a href="profile.html" className={`col-4 ${props.grid}`}><i className="far fa-border-all"></i></a>
            <a href="boards.html" className={`col-4 ${props.boards}`}><i className="far fa-thumbtack"></i></a>
        </div>
    );
}

export default ProfileNav;
