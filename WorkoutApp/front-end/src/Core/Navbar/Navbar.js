import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

class Navbar extends React.Component{  
        constructor(props){
            super(props);

            this.state = {
                workouts: [{"steps": [{}]}],
                workoutsLoaded: true,       //will turn this back to false for prod version
            };

        }
    
        async componentDidMount(){
            fetch('https://localhost:7025/Workouts')
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        workouts: json,
                        workoutsLoaded: true
                    });
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        
        render() {
            const { workoutsLoaded, workouts } = this.state;
            if(!workoutsLoaded) return(
                <div>

                </div>
            )

            return (
                <nav>
                    <a href="/"><img src="../logo-orange.png" alt="logo" className="nav--logo" /></a>
                    <h2 className='nav--logo_text'><a href="/">Fit Happens</a></h2>
                    <ul className="nav--list">
                        <input type="checkbox" id="checkbox_toggle" />
                        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                        <div className="menu">
                            <NavLink
                                end to="/"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            >HOME</NavLink>
                            <NavLink
                                to="MyWorkouts"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            >YOUR WORKOUTS</NavLink>
                            <NavLink
                                to="MyProfile"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            >PROFILE</NavLink>
                            <NavLink
                                to="Login"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            >LOG IN</NavLink>
                            <NavLink
                                to="Register"
                                className={({ isActive }) => (isActive ? 'activeSign' : 'inactiveSign')}
                            >SIGN UP</NavLink>
                            {/*<li><a href="/">HOME</a></li>
                            <li><a href="MyWorkouts">YOUR WORKOUTS</a></li>
                            <li><a href="MyProfile">PROFILE</a></li>
                            <li><a href="Login"><div className="login">LOG IN</div></a></li>
                            <li><a href="Register"><div className="sign--up">SIGN UP</div></a></li>
                            */}
                        </div>
                    </ul>
                </nav>
            )
        };
}


export default Navbar;
