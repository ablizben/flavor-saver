import React from "react";

function AddToBoard() {
    return (
        <form>
            <div className="input-group mt-2">
                <input type="text" className="form-control plus" placeholder="Create a Board" aria-label="Create Board" aria-describedby="create-board" />
                <div className="input-group-append">
                    <button className="btn btn-plus mt-0" type="button" id="create-board"><i className="far fa-plus"></i></button>
                </div>
            </div>
        </form>
    );
}

export default AddToBoard;
