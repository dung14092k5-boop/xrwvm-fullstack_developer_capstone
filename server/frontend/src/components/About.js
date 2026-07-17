import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
    return (
        <div className="container mt-5">

            <div className="card shadow-lg">
                <div className="card-body p-5">

                    <h1 className="text-center mb-4">
                        About Us
                    </h1>


                    <p className="lead text-center">
                        Welcome to the Car Dealership Application.
                    </p>


                    <hr />


                    <p>
                        Our dealership platform provides customers with 
                        an easy way to explore available vehicles and 
                        connect with trusted dealerships.
                    </p>


                    <p>
                        This application was developed as part of the 
                        IBM Full Stack Developer Capstone Project using 
                        modern web technologies including Django REST API 
                        and React.
                    </p>


                    <div className="row mt-4">

                        <div className="col-md-4">

                            <div className="card text-center h-100">

                                <div className="card-body">

                                    <h5 className="card-title">
                                        Quality Cars
                                    </h5>

                                    <p>
                                        Browse a wide range of vehicles 
                                        from verified dealerships.
                                    </p>

                                </div>

                            </div>

                        </div>



                        <div className="col-md-4">

                            <div className="card text-center h-100">

                                <div className="card-body">

                                    <h5 className="card-title">
                                        Trusted Dealers
                                    </h5>

                                    <p>
                                        Connect with professional dealers 
                                        and reliable services.
                                    </p>

                                </div>

                            </div>

                        </div>




                        <div className="col-md-4">

                            <div className="card text-center h-100">

                                <div className="card-body">

                                    <h5 className="card-title">
                                        Easy Experience
                                    </h5>

                                    <p>
                                        Simple and user-friendly car 
                                        searching experience.
                                    </p>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
}


export default About;