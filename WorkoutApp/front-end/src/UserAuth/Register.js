import React, { useEffect, useState } from "react";
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

  return (
    <div>
      <div>
        <a href="/"><img className="reg--pic" src="logo-orange.png"></img></a>
        <h1 className="log--title">Create your free account</h1>
        <h3 className="log--subtitle">Or&nbsp;<Link to="../Login" className="link">login into your account</Link></h3>
      </div>
      <div className="register">
        <div className="register__container">
          <label>Full Name</label>
          <input
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            onFocus={e => e.currentTarget.select()}
          />
          <label>Email</label>
          <input
            type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label> &nbsp;</label>
          <button className="register__btn" onClick={register}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
export default Register;