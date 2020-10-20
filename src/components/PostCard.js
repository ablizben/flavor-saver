import React from 'react'

export default function PostCard() {
    return (
        <div className="card">
            <div className="card-header row m-0">
                <div className="col image d-flex align-items-center">
                    <a href="#" className="profile-circle" style="background: url('https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'); background-size: cover; background-position: center center;"></a>
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <a href="#" className="username">woodberrykitchen</a>
                        <a href="#" className="location"><i className="fas fa-map-marker-alt"></i> Baltimore, Maryland</a>
                    </div>
                </div>
            </div>
            <a href="#">
                <div className="card-image" style="height: 100vw; background: url('https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'); background-size: cover; background-position: center center;">
                    <div className="save-hover">
                        <button className="btn text-white btn-small">
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
    );
};