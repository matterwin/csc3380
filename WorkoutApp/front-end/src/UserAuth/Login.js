import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

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
    if (user) navigate("/myprofile");
  }, [user, loading]);

  return (
    <div>
      <div>
          <a href="/"><img className="reg--pic" src="logo-orange.png"></img></a>
          <h1 className="log--title">Log in to your account</h1>
          <h3 className="log--subtitle">Or&nbsp;<a href="/register"> <div className="link">create a free account</div></a></h3>
      </div>
      <div className="login">
        <div className="login__container">
          <label>Email</label>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label> &nbsp;</label>
          <button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;