import React from 'react'
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return { color: '#EF841A', backgroundColor: "transparent" }
    }else {
        return { color: '#A0A0A0' }
    }
}

const Footer = ({history}) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FFEAD5' }}>
        <div className="container">
            <Link className='navbar-brand' style={{ fontSize: 30, marginRight: 50, }} to="/">CG</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/events" >About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Terms and Conditions</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Privacy</Link>
                    </li>
                </ul>
                
                <div className="">
                    <label>Subscribe to newsletter</label>
                    <input width="100%" className="form-control me-2" placeholder="Enter email"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default withRouter(Footer)
