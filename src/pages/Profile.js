import React, { Component } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Grid from "../components/Grid";

const gridPosts = [
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
];

class Profile extends Component {
    render() {
        return (
            <Grid posts={gridPosts} />
        );
    }
}

export default Profile;
