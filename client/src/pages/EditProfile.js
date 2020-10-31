import React, { useRef, useState, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';
import { storage } from "../imageUpload";
import { useDropzone } from "react-dropzone";


export default function EditProfile() {

const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

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

  const handleUpload = (event) => {
    event.preventDefault();
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
  };

  console.log("image: ", image);


    return (
        <div className="container">
            <Header />
            
            <div className="body-content row d-flex justify-content-center">
                <div className="col-12">
                    
                <h1>Edit Profile</h1>	

                <form className="mb-5">

                    <div className="form-group file-upload split row">
                        <label className="mb-1" for="profileimage">Profile Image</label>
                        <div className="col-6">
                            <div className="file-upload-content">
                                <button type="button" onclick="removeToPlaceholder()" className="remove-image close"><i className="fal fa-times"></i></button>
                            </div>
                        </div>

{/* 
                        <div className="col-6">
                            <div className="image-upload-wrap">
                                <input className="file-upload-input" type='file' onchange="readDisplayImage(this);" accept="image/*" />
                                <span>Drag & Drop or Click to Add</span>
                            </div>
                        </div> */}
                        <div className="col-6">
                            <div className="image-upload-wrap">
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
                </div>
                </div>


                    {/* </div> */}

                    <div className="form-group">
                        <label className="pb-0" for="username">Username</label>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="username" />
                    </div>
                    <div className="form-group">
                        <label className="pb-0" for="displayname">Display Name</label>
                        <input type="text" className="form-control" aria-label="Display Name" aria-describedby="displayname" />
                    </div>
                    <div className="form-group">
                        <label className="pb-0" for="location">Location</label>
                        <input type="text" className="form-control" aria-label="Location" aria-describedby="location" />
                    </div>
                    <div className="form-group">
                        <label className="pb-0" for="bio">Bio</label>
                        <input type="text" className="form-control" aria-label="Bio" aria-describedby="bio" />
                    </div>
                    <div className="form-group">
                        <label className="pb-0" for="website">Website</label>
                        <input type="text" className="form-control" aria-label="Website" aria-describedby="website" />
                    </div>
                    <div className="form-group">
                        <label className="pb-0" for="reservations">Reservations</label>
                        <input type="text" className="form-control" aria-label="Reservations" aria-describedby="reservations" />
                    </div>
                    <div className="form-group mb-0">
                        <label className="pb-0" for="ordernow">Order Now</label>
                        <input type="text" className="form-control" aria-label="Order Now" aria-describedby="ordernow" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleUpload}>Save</button>
                </form>

                </div>
	        </div>

            <Footer />
        </div>

    );
};