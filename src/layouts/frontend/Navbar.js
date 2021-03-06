import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

function Navbar() {
    
    const history = useHistory();

    function logoutSubmit(e)
    {
        e.preventDefault();

        axios.post(`/api/logout`)
            .then(res => {
                if (res.data.status === 200) {
                    localStorage.removeItem('auth_token', res.data.token)
                    localStorage.removeItem('auth_name', res.data.name)
                    swal('Success', res.data.message, 'success');
                    history.push('/');
                }
            })
    }

    var AuthButton = '';

    if (!localStorage.getItem('auth_token')) {
        AuthButton = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        );
    } else {
        AuthButton = (
            <li className="nav-item">
                <Link className="nav-link btn btn-danger" onClick={logoutSubmit} to="/logout">Logout</Link>
            </li>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Collection</Link>
                        </li>
                        { AuthButton }                   
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;