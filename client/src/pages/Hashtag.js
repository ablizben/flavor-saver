import React from "react";
import Header from "../components/Header";
import Sort from "../components/Sort";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

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

function Hashtag() {
    return (
        <div class="container">
            <Header />
            <div class="body-content row d-flex justify-content-center">
		        <div class="col-12">
                    <h1 class="mb-2"><i class="fas fa-hashtag"></i> baltimoreeats</h1>
                    <Sort />
                    <Grid posts={profile.posts} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Hashtag;
