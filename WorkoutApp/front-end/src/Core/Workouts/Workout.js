import React, { useEffect } from "react";
import { act } from "react-dom/test-utils";
import Workouts from "./Workouts";
import "./Workout.css"
import launchsettings from "../../launchsettings.json"
import { NavLink } from 'react-router-dom';

class Workout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            workout: [{ "steps": [{}] }],
            workoutLoaded: false
        }
    }

    async componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        fetch(`${launchsettings.SERVER_URL}Workouts/${params.get("id")}`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    workout: json,
                    workoutLoaded: true
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        const { workoutLoaded, workout } = this.state;
        if (!workoutLoaded) return (
            <div className="loading">
                <img src={`/Gifs/Loading.png`} alt="load"/>
            </div>
        )

        return (
            <div>
                <center className="step--workout">
                <div className="card">
                            <div className="card--badge">{workout.workoutType}</div>
                            <img 
                                src={`/Gifs/${workout.workoutType}.gif`}
                                className="card--image" 
                            />
                            <p className="card--title"> {workout.title} </p>
                            <p className="desc"> {workout.description} </p>
                        {
                            Object.keys(workout.steps).map((step, j) => (     
                                    <span className="steps-box">
                                            <p className="steps">Step {j + 1}: {workout.steps[j].instruction} {workout.steps[j].unit || ""}</p>
                                    </span>    
                            ))
                        }
                        <NavLink
                            end to={"/"}
                            className="btn__steps"
                            >Home</NavLink>
                         </div>
                </center>
            </div>
        )
    };
}


export default Workout;