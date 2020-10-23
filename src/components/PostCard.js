import React, { useState } from "react";

const styles = {
    profCircle: {
        background: "url('https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center center"
    },
    cardImage: {
        height: "100vw ",
        background: "url('https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center center"

    }
}



function PostCard() {
    const [showSave, setShowSave] = useState(true);

    const toggleMenu = () => {
        setShowSave(!showSave);
    };

    return (
        <div>
        <div className="card">
            <div className="card-header row m-0">
                <div className="col image d-flex align-items-center">
                    <a href="#" className="profile-circle" style={styles.profCircle}></a>
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <a href="#" className="username">woodberrykitchen</a>
                        <a href="#" className="location"><i className="fas fa-map-marker-alt"></i> Baltimore, Maryland</a>
                    </div>
                </div>
            </div>
            <a href="#">
                <div className="card-image" style={styles.cardImage}>
                    <div className="save-hover">
                        <button className="btn text-white btn-small" onClick={toggleMenu}>
                            <i className="fas fa-bookmark"></i>
                            Save
                        </button>
                    </div>
                </div>
            </a>
            <div className="card-body">
                <p className="card-text"></p>
                <p className="date mb-0">October 11</p>
            </div>
        </div>
         {showSave ? (
         <div className="save-modal">
             <div className="close"onClick={toggleMenu}><i class="fal fa-times"></i></div>
             <div className="w-100">
                 <h1>Save to Board</h1>
                 <form id="saveToBoard">
 
 {/* <Alert /> */}
 
 
                     <div className="form-group mb-0">
                         <label for="board">Board</label>
                         <div className="select-wrap">
                             <select class="form-control" id="board">
                                 <option>General</option>
                                 <option>Recipe Ideas</option>
                                 <option>Local</option>
                             </select>
                             <i className="fas fa-chevron-down"></i>
                         </div>	
                     </div>
                     <div className="input-group mt-2">
                         <input type="text" className="form-control plus" placeholder="Create a Board" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                         <div className="input-group-append">
                             <button className="btn btn-plus mt-0" type="button" id="button-addon2"><i class="far fa-plus"></i></button>
                         </div>
                     </div>
                     <button type="submit" className="btn btn-secondary" onClick={toggleMenu}>Save</button>
                 </form>
             </div>
         </div>
         ) : (
             <h4></h4>
           )}   
</div>

        
    );
};

export default PostCard;
