import React from "react";

function Alert(props) {
    return (
        <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
            <span className="alert-copy">{props.children}</span>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i className="fal fa-times"></i></span></button>
        </div>
    );
}

export default Alert;
