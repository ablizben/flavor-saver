import React from 'react';

function styles(user) {
	const {image} = user;
	return {
		background: `url(${image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center'
	}
}

function ProfileInfo(props) {
    return (
        <div className="profile-info">
            <div className="profile-image" style={styles(props)}></div>
            <h1 className="mb-1">{props.name}</h1>
            <a href={props.locationURL} className="location text-center d-block"><i className="fas fa-map-marker-alt"></i> {props.location}</a>
            <div className="stats row m-0 text-center">
                <div className="col-4">
                    <span className="num">{props.posts}</span>
                    Posts
                </div>
                <div className="col-4">
                    <span className="num">{props.followers}</span>
                    Followers
                </div>
                <div className="col-4">
                    <span className="num">{props.following}</span>
                    Following
                </div>
            </div>
            <div className="col">
                <a href="edit-profile.html" className="btn btn-primary w-100">Edit Profile</a>
            </div>
            <div className="col">
                <p className="bio text-center">{props.bio}</p>
                <a href={props.website} className="location text-center d-block"><i className="fas fa-link"></i> {props.website}</a>
            </div>
            <div className="col text-center">
                <div className="btn-group text-center">
                    <a href="#" className="btn btn-outline btn-small">Reservations</a>
                    <a href="#" className="btn btn-outline btn-small">Order Online</a>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
