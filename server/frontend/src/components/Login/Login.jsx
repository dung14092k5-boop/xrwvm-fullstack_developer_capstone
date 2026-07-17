import React, { useState } from 'react';

import "./Login.css";
import Header from '../Header/Header';


const Login = ({ onClose }) => {


  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(true);



  // Django API endpoint
  let login_url = "http://127.0.0.1:8000/djangoapp/loginuser";



  const login = async (e) => {

    e.preventDefault();


    try {


      const res = await fetch(login_url, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },


        body: JSON.stringify({

          "userName": userName,

          "password": password

        }),

      });



      const json = await res.json();



      console.log(json);



      if (
        json.status != null &&
        json.status === "Authenticated"
      ) {


        // lưu session user

        sessionStorage.setItem(
          "username",
          json.userName
        );


        sessionStorage.setItem(
          "isLoggedIn",
          "true"
        );


        setOpen(false);


      }

      else {


        alert(
          "The user could not be authenticated."
        );


      }


    }

    catch(error) {


      console.error(
        "Login error:",
        error
      );


      alert(
        "Cannot connect to Django server."
      );


    }


  };





  if (!open) {

    window.location.href = "/";

  }




  return (

    <div>

      <Header/>


      <div onClick={onClose}>


        <div

          onClick={(e) => {
            e.stopPropagation();
          }}

          className='modalContainer'

        >


          <form

            className="login_panel"

            onSubmit={login}

          >



            <div>

              <span className="input_field">
                Username
              </span>


              <input

                type="text"

                name="username"

                placeholder="Username"

                className="input_field"

                value={userName}

                onChange={
                  (e) =>
                  setUserName(e.target.value)
                }

                required

              />

            </div>




            <div>


              <span className="input_field">
                Password
              </span>


              <input

                name="psw"

                type="password"

                placeholder="Password"

                className="input_field"


                value={password}

                onChange={
                  (e) =>
                  setPassword(e.target.value)
                }


                required


              />


            </div>





            <div>


              <input

                className="action_button"

                type="submit"

                value="Login"

              />



              <input

                className="action_button"

                type="button"

                value="Cancel"

                onClick={
                  () => setOpen(false)
                }

              />


            </div>





            <a

              className="loginlink"

              href="/register"

            >

              Register Now

            </a>




          </form>



        </div>


      </div>


    </div>

  );

};


export default Login;