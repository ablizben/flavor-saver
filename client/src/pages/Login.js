import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError('Failed to login');
        }
        setLoading(false);
    };

    return (
        <div className="login container-fluid">
            <div className="row d-flex h-100 align-items-center justify-content-center">
                <div className="col-10">
                    <div className="vertical-align-center">

                        <div className="logo large">Flavor Saver</div>
                        <h1 className="caps">Login</h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <form id="login" onSubmit={handleSubmit}>
                            {/* *CAN'T GET THIS TO WORK WITHOUT ERASING THE WHOLE PAGE* */}
                            {/* —————————— Start Blank Danger Alert —————————— */}
                            {/* <div className="alert alert-danger alert-dismissible fade show" role="alert" style="display:none">
                                <span className="alert-copy"></span>
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i className="fal fa-times"></i></span></button>
                                </div> */}
                            {/* —————————— End Blank Danger Alert —————————— */}
                            <div className="form-group">
                                <input ref={emailRef} required placeholder="Email" type="email" className="form-control line-input" id="email" aria-describedby="email"></input>
                            </div>
                            <div className="form-group mb-0">
                                <input ref={passwordRef} required placeholder="Password" type="password" class="form-control line-input" id="password"></input>
                            </div>
                            <button type="submit" className="btn btn-secondary" disabled={loading}>Log in</button>
                        </form>
                       
                       <p>Need and account? <Link to="/signup">Sign Up</Link></p>

                    </div>
                </div>
            </div>
        </div>

        //*ORIGINAL CODE*
        // <>
        //     <Card>
        //         <Card.Body>
        //             <h2 className="text-center mb-4">Login</h2>
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
        //                 <Button disabled={loading} className="w-100" type="submit">
        //                     Login
        //                 </Button>
        //             </Form>
        //             <div className="w-100 text-center mt-3">
        //                 <Link to="/forgot-password">Forgot Password?</Link>
        //             </div>
        //         </Card.Body>
        //     </Card>
        //     <div className="w-100 text-center mt-2">
        //         Need an account? <Link to="/signup">Sign Up</Link>
        //     </div>
        // </>
    );
};
