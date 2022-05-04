import React from 'react';
import "./resource/signin.css";
import google from "./resource/google.png";
import login_mobile from "./resource/loginmobile.png";


const Login = () => (
  <>
    <div className="container">
        <div className="one-sub-con">
            <img src={login_mobile} alt=""/>
            <div className="account">
            <h1>Login your Account</h1>
            </div>
        </div>
        <div className="two-sub-con">
            <form action="">
            <div className="main-head">
                <h1>Sign In</h1>
                <p>Enter your credentials to access your account </p>

                
                   
                       
                    <input className="image" type="email" placeholder="Email"/>
                
                    <input type="password" placeholder="Password"/>
                    <button  type="submit">Sign In</button>
                
            </div>
                <div className="main-info">

                    <p>OR</p>
                    <div className="google">

                        <button> <img src={google} alt=""/> <span> Sign In with Google</span></button>
                    </div>

                    <p>Crate a new account? <a href="signup"> Sign Up</a></p>


                </div>
            </form>
        </div>
    </div>

  </>
);
export default Login;