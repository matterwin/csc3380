import React, { useEffect, useState } from "react";
import {useRef} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "./firebase";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/MyProfile");
  }, [user, loading]);

  const inputRefs = useRef([]);

  return (
    <div className="reg">
      <div className="space--uptop"></div>
      <center>
        <div>
          <a href="/"><img className="reg--pic" src="logo-orange.png"></img></a>
          <h1 className="log--title">Create your free account</h1>
          <h3 className="log--subtitle">Or&nbsp;<Link to="../Login" className="link">login into your account</Link></h3>
        </div>
        <div className="register">
          <div className="register__container">
            <div>
              <br></br>
              <input
                type="text"
                placeholder="Full Name"
                className="register__textBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                onFocus={e => e.currentTarget.select()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "ArrowDown") {
                    //console.log("enter email");
                    inputRefs.current[1].focus();
                  }
                }}
                ref={(el) => (inputRefs.current[0] = el)}
              />
              <label className="fullNameLabel">Full Name</label>
            </div>
            <div>
              <br></br>
              <input
                type="text"
                placeholder="Email"
                className="register__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "ArrowDown") {
                    //console.log("enter email");   
                    inputRefs.current[2].focus();        
                  }
                  if(e.key == "ArrowUp") {
                    inputRefs.current[0].focus();
                  }
                }}
                ref={(el) => (inputRefs.current[1] = el)}
              />
              <label className="emailRegLabel">Email</label>
            </div>
            <div>
              <br></br>
              <input
                type="password"
                placeholder="Password"
                className="register__textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    //console.log("enter password");
                    registerWithEmailAndPassword(name, email, password);
                  }
                  if(e.key == "ArrowUp") {
                    inputRefs.current[1].focus();
                  }
                }}
                ref={(el) => (inputRefs.current[2] = el)}
              />
              <label className="passwordRegLabel">Password</label>
            </div>
            <label> &nbsp;</label>
            <button 
              className={ (name) ? 
                            ((email) ?
                              ((password) ? 
                                'register__btn' : 'reg__btn__3rd__disabled'
                              )
                            : ((password) ? 'reg__btn__3rd__disabled' :  'reg__btn__2nd__disabled')

                            )
                          : ((email) ?
                              ((password) ? 
                                'reg__btn__3rd__disabled' : 'reg__btn__2nd__disabled'
                              )
                              : ((password) ? 'reg__btn__2nd__disabled' : 'reg__btn__disabled')
                            )
              }
              onClick={register}
            >
              Register
            </button>
          </div>
        </div>
      </center>
      <center>
        <div className="buttons">
          <a href="/" className="home">Home</a>
          <>&nbsp;&nbsp;</>
          <Link to="/Login" className="signup">Log in</Link>
        </div>
        <p className="copyright">?? Copyright 2022 Team MMM. All Rights Reserved.</p>
      </center>
    </div>
  );
}
export default Register;