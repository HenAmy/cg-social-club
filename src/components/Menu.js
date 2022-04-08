import React, { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return { color: '#EF841A', backgroundColor: "transparent" }
    }else {
        return { color: '#A0A0A0' }
    }
}

const Menu = ({history}) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const signinClose = () => setShowSignIn(false);
    const signinShow = () => setShowSignIn(true);
    
    const signupClose = () => setShowSignUp(false);
    const signupShow = () => setShowSignUp(true);

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className='navbar-brand' style={{ fontSize: 30, marginRight: 20, }} to="/">CG</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/events" style={isActive(history, '/events')}>Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/membership" style={isActive(history, '/membership')}>Membership</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shows" style={isActive(history, '/shows')}>Shows</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/competitions" style={isActive(history, '/competitions')}>Competitions</Link>
                    </li>
                </ul>
                
                <div class="d-flex">
                    <button style={{backgroundColor: '#FFEAD5', color: '#EF841A', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5, marginRight: 15}} onClick={signinShow}>Sign In</button>
                    <button style={{backgroundColor: '#EF841A', color: '#FFF', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5}} onClick={signupShow}>Sign Up</button>
                </div>
            </div>
        </div>
        {/* Sign In Modal Start */}
        <Modal centered show={showSignIn} onHide={signinClose}>
            <Modal.Header closeButton>
                <Modal.Title className='text-center'>Welcome to CG Socials</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <button style={{ width: '100%' , border: 'solid', borderWidth: 1,  borderRadius: 8, padding: 10, textAlign: 'center', backgroundColor: 'white' }}>Sign in with Google</button>
                <button style={{width: '100%', border: 'solid',  borderWidth: 1, borderRadius: 8, padding: 10, textAlign: 'center', backgroundColor: 'white', marginTop: 10}}>Sign in with Facebook</button>
                
                <div className="mt-4">
                    <label>Email</label>
                    <input width="100%" className="form-control me-2" placeholder="Enter email" type='email'/>
                </div>
                <div className="mt-2">
                    <label>Password</label>
                    <input width="100%" className="form-control me-2" placeholder="Enter password" type='password'/>
                </div>

                <button style={{backgroundColor: '#EF841A', color: '#FFEAD5', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5, marginTop: 15}} onClick={signinShow}>Sign In</button>
            </Modal.Body>   
        </Modal>
        {/* Sign In Modal End */}

        {/* Sign Up Modal Start */}
        <Modal centered show={showSignUp} onHide={signupClose}>
            <Modal.Header closeButton>
                <Modal.Title className='text-center'>Welcome to CG Socials</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <button style={{ width: '100%' , border: 'solid', borderWidth: 1,  borderRadius: 8, padding: 10, textAlign: 'center', backgroundColor: 'white' }}>Sign in with Google</button>
                <button style={{width: '100%', border: 'solid',  borderWidth: 1, borderRadius: 8, padding: 10, textAlign: 'center', backgroundColor: 'white', marginTop: 10}}>Sign in with Facebook</button>
                
                <div className="mt-4">
                    <label>Full Name</label>
                    <input width="100%" className="form-control me-2" placeholder="Enter Full Name" type='text'/>
                </div>
                <div className="mt-2">
                    <label>Email</label>
                    <input width="100%" className="form-control me-2" placeholder="Enter email" type='email'/>
                </div>
                <div className="mt-2">
                    <label>Password</label>
                    <input width="100%" className="form-control me-2" placeholder="Enter password" type='password'/>
                </div>
                <div className="mt-2">
                    <label>Confirm Password</label>
                    <input width="100%" className="form-control me-2" placeholder="Enter password" type='password'/>
                </div>

                <button style={{backgroundColor: '#EF841A', color: '#FFEAD5', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5, marginTop: 15}}>Sign Up</button>
            </Modal.Body>   
        </Modal>
        {/* Sign Up Modal End */}
    </div>
    
  )
}

export default withRouter(Menu)
