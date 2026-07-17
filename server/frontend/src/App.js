import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";



function App() {


    return (

        <Router>


            <Header />


            <Routes>


                <Route 
                    path="/"
                    element={<Login />}
                />


                <Route 
                    path="/login"
                    element={<Login />}
                />



                <Route
                    path="/register"
                    element={<Register />}
                />



                <Route
                    path="/about"
                    element={<About />}
                />



                <Route
                    path="/contact"
                    element={<Contact />}
                />


            </Routes>


        </Router>

    );

}


export default App;