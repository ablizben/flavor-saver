import React from "react";

function MetaData(props) {
    return (
        <a href={props.link} className={props.type}>
            <li className="row m-0">
                <div className="col image d-flex align-items-center p-0">
                    <span className="profile-circle"></span>
                </div>
                <div className="col d-flex align-items-center p-0">
                    <div>
                        <span className="term">{props.term}</span>
                        <span className="meta">{props.meta}</span>
                    </div>
                </div>
            </li>
        </a>
    );
}

export default MetaData;

