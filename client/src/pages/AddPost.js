import React, { useRef, useState, Redirect, useCallback } from 'react';
// import ReactDOM from 'react-dom';
import { storage } from "../imageUpload";
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';
import { useDropzone } from "react-dropzone";


export default function AddPost(props) {

    const [error,setError] = useState("");
    const { currentUser, logout } = useAuth();
    const { history } = useHistory();
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [image, setImage] = useState(null);
    const [previewURL, setPreviewURL] = useState("");

    const locationRef = useRef();
    const captionRef = useRef();
    const hashtagsRef = useRef();

    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
        console.log("on drop");
        console.log(acceptedFiles);
        //?? don't know how to test
        if (!acceptedFiles[0]) return;
    
        if (acceptedFiles[0].type.includes("image")) {
          setImage(acceptedFiles[0]);
          setPreviewURL(URL.createObjectURL(acceptedFiles[0]));
        } else {
          alert("not a picture");
        }
        
      }, []);
    
      const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    
      const removeFile = (event) => {
        setImage(null);
        setPreviewURL("");
      };
    

      console.log("image: ", image);

    // console.log(currentUser.email);

    axios.get(`/users/email/${currentUser.email}`)
        .then(
            res => setUserId(res.data[0]._id),
            console.log(`New userId State: ${userId}`),
            );
    
    axios.get(`/users/email/${currentUser.email}`)
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

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                //to show in console.log
                console.log(url);
              });
          }
        );

        props.history.push('/');
    };

      // const handleUpload = (event) => {
      //   event.preventDefault();
        
      // };
    
    return (
        <div className="container">
            <Header />
            
            <div class="body-content row d-flex justify-content-center">
                <div class="col-12">
                    
                    <h1>Add Post</h1>	

                    <form id="add-post" class="mb-5" onSubmit={handleSubmit}> 
                        <div class="form-group file-upload">
                            <label class="mb-1" for="postimage">Upload An Image</label>
                            <div className="image-container">
                  {previewURL ? (
                    <>
                      <button
                        type="button"
                        className="remove-image close"
                        onClick={removeFile}
                      >
                        <i className="fal fa-times"></i>
                      </button>
                      <img
                        src={previewURL}
                        alt="whatever"
                        className="file-upload-content"
                      />
                    </>
                  ) : (
                    <div className="image-upload-wrap" {...getRootProps()}>
                      <input
                        className="file-upload-input"
                        type="file"
                        {...getInputProps()}
                      />
                      {isDragActive ? (
                        <span>DROP HERE</span>
                      ) : (
                        <span>Drag and Drop or Click to Add</span>
                      )}
                    </div>
                  )}
                </div>

                {/* {image && <p>{image.path}</p>} */}
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
                        <button type="submit" class="btn btn-primary"
                        // onClick={handleUpload}
                        >Post </button>
                    </form>

                </div>
	        </div>

            <Footer />
        </div>

    );
};