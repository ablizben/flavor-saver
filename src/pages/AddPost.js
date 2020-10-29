import React, { useRef, useState, Redirect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';


export default function AddPost(props) {

    const [error,setError] = useState("");
    const { currentUser, logout } = useAuth();
    const { history } = useHistory();
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");

    const locationRef = useRef();
    const captionRef = useRef();
    const hashtagsRef = useRef();

    // console.log(currentUser.email);

    axios.get(`http://localhost:3001/users/email/${currentUser.email}`)
        .then(
            res => setUserId(res.data[0]._id),
            console.log(`New userId State: ${userId}`),
            );
    
    axios.get(`http://localhost:3001/users/email/${currentUser.email}`)
    .then(
        res => setUserName(res.data[0].username),
        console.log(`New userName State: ${userName}`),
        );
    

    async function handleSubmit(e) {
        e.preventDefault();

        const post = {
            photo: "https://via.placeholder.com/300",
            location: locationRef.current.value,
            caption: captionRef.current.value,
            hashtags: hashtagsRef.current.value,
            userId: userId,
            userName: userName,
            userEmail: currentUser.email
        };
        
        axios.post('http://localhost:3001/posts/add', post)
            .then(res => console.log(res.data));

        props.history.push('/');
    };

    return (
        <div className="container">
            <Header />
            
            <div class="body-content row d-flex justify-content-center">
                <div class="col-12">
                    
                    <h1>Add Post</h1>	

                    <form id="add-post" class="mb-5" onSubmit={handleSubmit}> 
                        <div class="form-group file-upload">
                            <label class="mb-1" for="postimage">Upload An Image</label>
                            <div class="image-container">
                                <img 
                                    class="file-upload-content" 
                                    //*Causes page to be blank
                                    // style="display: none;" 
                                    src="https://via.placeholder.com/200"
                                />
                                <button 
                                    type="button" 
                                    onclick="removeAndRestart()" 
                                    class="remove-image close"
                                    //*Causes page to be blank
                                    // style="display:none"
                                ><i class="fal fa-times"></i></button>
                                <div class="image-upload-wrap">
                                    <input class="file-upload-input" type='file' onchange="readReplaceImage(this);" accept="image/*" />
                                    <span>Drag and Drop or Click to Add</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="pb-0" for="location">Location</label>
                            <input ref={locationRef} id="location" type="text" class="form-control" aria-label="Location" aria-describedby="location"/>
                        </div>
                        <div class="form-group">
                            <label class="pb-0" for="caption">Caption</label>
                            <input ref={captionRef} id="caption" type="text" class="form-control" aria-label="Caption" aria-describedby="caption"/>
                        </div>
                        <div class="form-group mb-0">
                            <label class="pb-0" for="hashtags">Hashtags</label>
                            <input ref={hashtagsRef} id="hashtags" type="text" class="form-control" aria-label="Hashtags" aria-describedby="hashtags"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Post</button>
                    </form>

                </div>
	        </div>

            <Footer />
        </div>

    );
};