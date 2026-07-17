import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Contact() {


    const [message, setMessage] = useState("");



    const handleSubmit = (e) => {

        e.preventDefault();

        setMessage(
            "Your message has been sent successfully!"
        );

    };



    return (

        <div className="container mt-5">


            <div className="card shadow-lg">


                <div className="card-body p-5">


                    <h1 className="text-center mb-4">
                        Contact Us
                    </h1>



                    <form onSubmit={handleSubmit}>


                        <div className="mb-3">

                            <label className="form-label">
                                Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
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
                                placeholder="Enter your email"
                                required
                            />

                        </div>




                        <div className="mb-3">

                            <label className="form-label">
                                Message
                            </label>


                            <textarea

                                className="form-control"
                                rows="5"
                                placeholder="Enter your message"
                                required

                            >

                            </textarea>


                        </div>



                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >

                            Send Message

                        </button>


                    </form>



                    {
                        message &&

                        <div className="alert alert-success mt-4">

                            {message}

                        </div>

                    }



                </div>


            </div>


        </div>

    );

}


export default Contact;