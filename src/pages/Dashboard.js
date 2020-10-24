import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import Sort from "../components/Sort";
import PostCard from "../components/PostCard";
import axios from 'axios';


export default function Dashboard() {

    const [error,setError] = useState("");
    const { currentUser, logout } = useAuth();
    const { history } = useHistory();
    const [userId, setUserId] = useState("");

    // console.log(currentUser.email);

    axios.get(`http://localhost:3001/users/email/${currentUser.email}`)
        .then(
            // res => console.log(res.data[0]._id),
            res => setUserId(res.data[0]._id),
            console.log(`New userId State: ${userId}`)
            );


    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.push('/login');
        } catch {
            setError('Failed to log out');
        }
    };

    return (
        <div className="container">
            {/* Header/Nav/Menu */}

            <Sort />

            {/* Have to figure out how to map through all of the posts */}
            <PostCard />

        </div>
        //*ORIGINAL CODE*/
        // <>
        //     <Card>
        //         <Card.Body>
        //         <h2 className="text-center mb-4">You are logged in</h2>
        //         {error && <Alert variant="danger">{error}</Alert>}
        //         <strong>User:</strong> {currentUser.email}
        //         </Card.Body>
        //     </Card>
        //     <div className="w-100 text-center mt-2">
        //         <Button variant="link" onClick={handleLogout}>Log Out</Button>
        //     </div>
        // </>
    );
};

// import React, { Component } from "react";
// import "../App.css";
// import Header from "../components/Header";
// import Menu from "../components/Menu";
// import Footer from "../components/Footer";

// class Feed extends Component {
//     render() {

//     }
//     return()
// }

// export default Feed;

