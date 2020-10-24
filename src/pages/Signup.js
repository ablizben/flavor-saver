import React, { useRef, useState } from 'react';
// import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const displayNameRef = useRef();
    const locationRef = useRef();
    // const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        //**This is not currently being used - for password confirmation field **/
        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //     return setError('Passwords do not match');
        // }

        console.log(`Email: ${emailRef.current.value}`);
        console.log(`Username: ${usernameRef.current.value}`);
        console.log(`Display Name: ${displayNameRef.current.value}`);
        console.log(`Location: ${locationRef.current.value}`);

        const user = {
            email: emailRef.current.value,
            username: usernameRef.current.value,
            displayName: displayNameRef.current.value,
            location: locationRef.current.value
        };
        
        axios.post('http://localhost:3001/users/add', user)
            .then(res => console.log(res.data));

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    };
    

    return (
        <div className="login container-fluid">
            <div className="row d-flex h-100 align-items-center justify-content-center">
                <div className="col-10">
                    <div className="vertical-align-center">
                        <div className="logo large">Flavor Saver</div>
                        <h1 className="caps">Sign Up</h1>

                        <form id="signup" onSubmit={handleSubmit}>
                            
                            {/* —————————— Start Blank Danger Alert —————————— */}
                                {/* <div className="alert alert-danger alert-dismissible fade show" role="alert" style="display:none">
                                    <span className="alert-copy"></span>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i className="fal fa-times"></i></span></button>
                                </div> */}
                            {/* —————————— End Blank Danger Alert —————————— */}

                            <div className="form-group">
                                <input ref={emailRef} required placeholder="Email" type="email" className="form-control line-input" id="email" aria-describedby="email"></input>
                            </div>
                            <div className="form-group">
                                <input ref={passwordRef} required placeholder="Password" type="password" className="form-control line-input" id="password"></input>
                            </div>
                            <div className="form-group">
                                <input ref={usernameRef} placeholder="Username" type="text" className="form-control line-input" id="username"></input>
                            </div>
                            <div className="form-group">
                                <input ref={displayNameRef} placeholder="Display Name" type="text" className="form-control line-input" id="name"></input>
                            </div>
                            <div className="form-group mb-0">
                                <input ref={locationRef} placeholder="Location" type="text" className="form-control line-input" id="location"></input>
                            </div>
                            <button type="submit" className="btn btn-secondary" disabled={loading}>Sign Up</button>
                        </form>
                        <p className="mb-0">Already have an account? <Link to="/login">Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>



        //**ORIGINAL CODE**
        // <>
        //     <Card>
        //         <Card.Body>
        //             <h2 className="text-center mb-4">Sign Up</h2>
        //             {error && <Alert variant="danger">{error}</Alert>}
        //             <Form onSubmit={handleSubmit}>
        //                 <Form.Group id="email">
        //                     <Form.Label>Email</Form.Label>
        //                     <Form.Control type="email" ref={emailRef} required />
        //                 </Form.Group>
        //                 <Form.Group id="password">
        //                     <Form.Label>Password</Form.Label>
        //                     <Form.Control type="password" ref={passwordRef} required />
        //                 </Form.Group>
        //                 <Form.Group id="password-confirm">
        //                     <Form.Label>Password Confirmation</Form.Label>
        //                     <Form.Control type="password" ref={passwordConfirmRef} required />
        //                 </Form.Group>
        //                 <Button disabled={loading} className="w-100" type="submit">
        //                     Sign Up
        //                 </Button>
        //             </Form>
        //         </Card.Body>
        //     </Card>
        //     <div className="w-100 text-center mt-2">
        //         Already have an account? <Link to="/login">Login</Link>
        //     </div>
        // </>
    )
}
