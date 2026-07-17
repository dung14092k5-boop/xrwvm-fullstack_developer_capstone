import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Register() {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [message, setMessage] = useState("");



    const handleSubmit = (e) => {

        e.preventDefault();


        if (password !== confirmPassword) {

            setMessage(
                "Passwords do not match!"
            );

            return;
        }


        /*
        Phase 5:
        Connect Django API here

        Example:

        fetch(
            "http://localhost:8000/djangoapp/register",
            {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            }
        )

        */


        setMessage(
            "Registration successful!"
        );


        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };



    return (

        <div className="container mt-5">


            <div className="row justify-content-center">


                <div className="col-md-6">


                    <div className="card shadow-lg">


                        <div className="card-body p-5">


                            <h2 className="text-center mb-4">
                                Register
                            </h2>



                            <form onSubmit={handleSubmit}>


                                <div className="mb-3">

                                    <label className="form-label">
                                        Username
                                    </label>


                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter username"
                                        value={username}
                                        onChange={
                                            (e) => setUsername(e.target.value)
                                        }
                                        required
                                    />

                                </div>




                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>


                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={
                                            (e) => setEmail(e.target.value)
                                        }
                                        required
                                    />

                                </div>




                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>


                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={
                                            (e) => setPassword(e.target.value)
                                        }
                                        required
                                    />

                                </div>




                                <div className="mb-3">

                                    <label className="form-label">
                                        Confirm Password
                                    </label>


                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={
                                            (e) => setConfirmPassword(e.target.value)
                                        }
                                        required
                                    />

                                </div>




                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >

                                    Register

                                </button>



                            </form>



                            {
                                message &&

                                <div className="alert alert-info mt-4">

                                    {message}

                                </div>

                            }



                        </div>


                    </div>


                </div>


            </div>


        </div>

    );

}


export default Register;