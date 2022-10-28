import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useRef} from 'react';
import "./Login.css";
import { isEmpty } from "@firebase/util";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  const inputRefs = useRef([]);
/*<div className="signup--words"><p>Don't have an account yet?</p></div>*/
  return (
    <div className="log">
      <div className="space--uptop"></div>
      <center className="login-eveything">
        <div>
          <a href="/"><img className="log--pic" src="logo-orange.png"></img></a>
          <h1 className="log--title">Log in to your account</h1>
          <h3 className="log--subtitle">Or&nbsp;<Link to="../Register" className="link">create a free account</Link></h3>
        </div>
        <div className="login">
          <div className="login__container">
            <div>
              <br></br>
              <input
                type="text"
                placeholder="Email"              
                value={email}
                className='login__textBox'
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                onFocus={e => e.currentTarget.select()}
                onKeyDown={(e) => {              
                  //console.log( "You pressed a key: " + e.key );
                  if (e.key === "Enter" || e.key === "ArrowDown") {
                    //console.log("test");
                    inputRefs.current[1].focus();
                  }
                }}
                ref={(el) => (inputRefs.current[0] = el)}
              />
              <label className="emailLabel">Email</label>
            </div>
            <div>
              <br></br>
              <input
                type="password"
                placeholder="Password"
                value={password}
                className='login__textBox'
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    logInWithEmailAndPassword(email, password)
                  }
                  if(e.key == "ArrowUp") {
                    inputRefs.current[0].focus();
                  }
                }}
                ref={(el) => (inputRefs.current[1] = el)}             
              />
              <label className="passwordLabel">Password</label>
            </div>
            <label> &nbsp;</label>
            <button
              className={ 
                (email) ? 
                  ((password) ? 'login__btn' : 'login__btn__half__disabled') 
                : ((password) ? ((email) ? 'login__btn' : 'login__btn__half__disabled') : 'login__btn__disabled')}
              onClick={() => {logInWithEmailAndPassword(email, password)}}
              
            >
              Login
            </button>
          </div>
        
        </div>
      </center>
      <center>
        <div className="buttons">
          <a href="/" className="home">Home</a>
          <>&nbsp;&nbsp;</>
          <Link to="/Register" className="signup">Sign up</Link>
        </div>
        <p className="copyright">© Copyright 2022 Team MMM. All Rights Reserved.</p>
      </center>
    </div>
  );
}
//<p className="copyright">© Copyright 2022 Team MMM. All Rights Reserved.</p>
export default Login;