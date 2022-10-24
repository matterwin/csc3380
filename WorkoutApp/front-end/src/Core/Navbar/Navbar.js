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
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
      if (loading) return;
      if (!user) {
        return navigate("/");
      }
    }, [user, loading]);

    function handleClick() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        handleCheckbox();
    }
    
    function handleCheckbox() {
        setChecked(prev => !prev);
    }

    return (
        <nav className="navClass">
            <a href="/"><img src="../logo-orange.png" alt="logo" className="nav--logo" /></a>
            <h2 className='nav--logo_text'><a href="/">Fit Happens</a></h2>
            {/*<input className="searchBox" placeholder="  Search"/>*/}
            <input type="checkbox" id="nav-toggle" checked={checked} onChange={handleCheckbox}>
            </input>
            <ul className="nav--list">
                <div className="menu">
                    <NavLink
                        end to="/"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        onClick={handleClick}
                    >HOME</NavLink>
                    <NavLink
                        to="MyWorkouts"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        onClick={handleClick}   
                    >YOUR WORKOUTS</NavLink>
                    <NavLink
                        to="MyProfile"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        onClick={handleClick}
                    >PROFILE</NavLink>
                    {!user && (<NavLink
                        to="Login"
                        className={({ isActive }) => (isActive ? 'activeLog' : 'inactiveLog')}
                        onClick={handleClick}
                    >LOG IN</NavLink>)}
                    {!user && (<NavLink
                        to="Register"
                        className={({ isActive }) => (isActive ? 'activeSign' : 'inactiveSign')}
                        onClick={handleClick}
                    >SIGN UP</NavLink>)}       
                    {user && (<NavLink
                        end to="/"
                        className="sign-out"
                        onClick={logout}
                    >SIGN OUT</NavLink>)}
                </div>
            </ul>
            <label htmlFor="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </nav>
        )
    };


export default Navbar;