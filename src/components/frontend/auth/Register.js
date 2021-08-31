import React, {useState} from "react";
import Navbar from "../../../layouts/frontend/Navbar";

function Register() {
    const [ registerInput, setRegister ] = useState({
        name: "",
        email: "",
        password: ""
    });
    function handleChange(e) {
        const value = e.target.value;
        setRegister({
            ...registerInput,
            [e.target.name]: value
        });
    }
    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-3">
                                        <label>Full name</label>
                                        <input className="form-control" type="" onChange={handleChange} name="name" value={registerInput.name} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input className="form-control" type="" onChange={handleChange} name="email" value={registerInput.email} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input className="form-control" type="" onChange={handleChange} name="password" value={registerInput.password} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;