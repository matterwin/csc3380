import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "./Navbar.css"

class Navbar extends React.Component{  
        constructor(props){
            super(props);

            this.state = {
                workouts: [{"steps": [{}]}],
                workoutsLoaded: true,
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
                    <a href="Home"><img src="../logo-orange.png" alt="logo" className="nav--logo" /></a>
                    <h2 className='nav--logo_text'><a href="Home">Fit Happens</a></h2>
                    <ul className="nav--list">
                        <li><a href="/">Home</a></li>
                        <li><a href="MyWorkouts">Your Workouts</a></li>
                        <li><a href="MyProfile">Profile</a></li>
                        <li><a href="Login">Log In</a></li>
                        <li className="sign--up"><a href="Register">Sign Up</a></li>
                    </ul>
                </nav>
            )
        };
}


export default Navbar;