import React, { useState, useEffect } from "react";

import ProfileInfo from '../components/ProfileInfo';
import ProfileNav from '../components/ProfileNav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Boards from '../components/Boards';

const profile = {
	user: {
	  image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
	  name: "Lauren Siminski",
	  location: "Baltimore, MD",
	  locationURL: "#",
	  posts: "20",
	  followers: "20",
	  following: "20",
	  bio: "Patio dining Wednesday - Sunday.",
	  website: "https://www.woodberrykitchen.com",
	  reservations: "#",
	  orderOnline: "#"
	},
	posts: [
	  {
		id: "1",
		image: "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
		url: "#"
	  },
	  {
		id: "2",
		image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
		url: "#"
	  },
	  {
		id: "3",
		image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		url: "#"
	  }
	],
	boards: [
	  {
		id: "1",
		name: "Recipe Ideas",
		url: "#",
		images: [
		  "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
		  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
		  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
		]
	  },
	  {
		id: "2",
		name: "Local",
		url: "#",
		images: [
		  "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
		  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
		  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
		]
	  },
	  {
		id: "3",
		name: "General",
		url: "#",
		images: [
		  "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
		  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
		  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
		]
	  }
	]
  }

function Profile() {

	const [toggleContent, setToggleContent] = useState(false);
	
	useEffect(() => {}, [toggleContent]);
	
	const toggle = () => {
		setToggleContent(!toggleContent);
	};

	return (
		<div className="container">
			<Header />	
			<div className="body-content row d-flex justify-content-center">
				<div className="col-12">			
					<ProfileInfo 
						image={profile.user.image}
						name={profile.user.name} 
						location={profile.user.location}
						locationURL={profile.user.locationURL}
						posts={profile.user.posts}
						followers={profile.user.followers}
						following={profile.user.following}
						bio={profile.user.bio}
						website={profile.user.website}
						reservations={profile.user.reservations}
						orderOnline={profile.user.orderOnline}
					/>
					{toggleContent ? (
						<div>
							<ProfileNav onClick={toggle} grid="" boards="active" />
							<Boards boards={profile.boards} />
						</div>
					) : (
						<div>
							<ProfileNav onClick={toggle} grid="active" boards="" />
							<Grid posts={profile.posts} />
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);

}

export default Profile;
