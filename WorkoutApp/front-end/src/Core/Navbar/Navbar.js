import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../UserAuth/firebase";

function Navbar() {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (loading) return;
      if (!user) {
        return navigate("/");
      }
    }, [user, loading]);

    return (
        <nav className="navClass">
            <a href="/"><img src="../logo-orange.png" alt="logo" className="nav--logo" /></a>
            <h2 className='nav--logo_text'><a href="/">Fit Happens</a></h2>
            {/*<input className="searchBox" placeholder="  Search"/>*/}
            <ul className="nav--list">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                    <NavLink
                        end to="/"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                          }}
                    >HOME</NavLink>
                    <NavLink
                        to="MyWorkouts"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                          }}
                    >YOUR WORKOUTS</NavLink>
                    <NavLink
                        to="MyProfile"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                          }}
                    >PROFILE</NavLink>
                    {!user && (<NavLink
                        to="Login"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                          }}
                    >LOG IN</NavLink>)}
                    {!user && (<NavLink
                        to="Register"
                        className={({ isActive }) => (isActive ? 'activeSign' : 'inactiveSign')}
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                          }}
                    >SIGN UP</NavLink>)}       
                    {user && (<NavLink
                        end to="/"
                        className="sign-out"
                        onClick={logout}
                    >SIGN OUT</NavLink>)}
                </div>
            </ul>
        </nav>
        )
    };


export default Navbar;