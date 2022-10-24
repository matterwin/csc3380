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
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <div className="log">
      <div>
        <a href="/"><img className="reg--pic" src="logo-orange.png"></img></a>
        <h1 className="log--title">Log in to your account</h1>
        <h3 className="log--subtitle">Or&nbsp;<Link to="../Register" className="link">create a free account</Link></h3>
      </div>
      <div className="login">
        <div className="login__container">
          <label>Email</label>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            onFocus={e => e.currentTarget.select()}
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