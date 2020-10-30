import React from "react";
import { useHistory } from 'react-router-dom';

function MetaData(props) {
    const { location } = props;
    const history = useHistory();

    const onClick = () => {
        const { geometry: { location: { lat, lng } } } = location;

        history.push({
            pathname: '/location',
            search: `?latitude=${lat()}&longitude=${lng()}`
        });
    };

    return (
        <a href={props.link} className={props.type} onClick={onClick}>
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

