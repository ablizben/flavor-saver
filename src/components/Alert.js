import React from "react";

function Alert(props) {
    return (
        <div class={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
            <span class="alert-copy">{props.children}</span>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i class="fal fa-times"></i></span></button>
        </div>
    );
}

export default Alert;
