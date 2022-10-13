import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { act } from "react-dom/test-utils";
import { json } from "react-router";
import "./Workouts.css"

class Workouts extends React.Component{    
    // This is the amount of workouts we display on each page
    workoutsSize = 5;

    constructor(props){
        super(props);

        this.state = {
            workouts: [{"steps": [{}]}],
            workoutsLoaded: false,
            numWorkouts: 0,
            numWorkoutsLoaded: false
        }
    }

    async componentDidMount(){
        fetch('https://localhost:7025/Workouts/1/' + this.workoutsSize)
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

        fetch('https://localhost:7025/Workouts/Count')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    numWorkouts: json,
                    numWorkoutsLoaded: true
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    nextWorkouts(numWorkout){
        this.setState({
            workouts: [{"steps": [{}]}],
            workoutsLoaded: false,
            numWorkouts: 0,
            numWorkoutsLoaded: false
        })

        fetch('https://localhost:7025/Workouts/' + numWorkout + '/' + this.workoutsSize)
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

        fetch('https://localhost:7025/Workouts/Count')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    numWorkouts: json,
                    numWorkoutsLoaded: true
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        // This is the amount of workouts we display on each page
        const { workoutsLoaded, workouts, numWorkouts, numWorkoutsLoaded } = this.state;

        if(!workoutsLoaded || !numWorkoutsLoaded) return(
            <div className="loading">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif" alt="load"  />
                <h1 className="load--phrase">Loading Workouts</h1>
            </div>
        )

        return(
            <div className="container">
                <div className="welcome-screen">                
                    <center>
                    <img className="gif"
                    src="https://media0.giphy.com/media/u6JoYx9q6Isp2/200w.webp?cid=ecf05e47fdeez8fz3z6fscx3v380ju264atjs0gcu8jg72ee&rid=200w.webp&ct=s"></img></center>
                    <h1>Fit happens, it's inevitable</h1>
                    <h2>Get your fit on and explore, conquer, and commit your fitness goals</h2>
                    <img className="gif2"src="https://media4.giphy.com/media/113r36rG1hCJ6o/200w.webp?cid=ecf05e47plpqa87mbe6nkgsp5n64sq96bxeyncfpaku8wvzt&rid=200w.webp&ct=s">                       
                    </img>
                </div>
                <div className="preview-workouts">
                    <center>
                        {
                            
                        [...Array(parseInt((numWorkouts / this.workoutsSize) + 1)) || []].map((key, value) => {
                            return ( 
                                <button key={value} onClick={() => this.nextWorkouts(value + 1)}>{value + 1}</button>
                            )
                        })
                        }
                        {
                            Object.keys(workouts || "").map((workout, i) => (
                                <div className="workout" key={i}>
                                    <h1>
                                        {/*workouts[workout].workoutID}*/}
                                        <a href={"/Workout?id=" + workouts[workout].id}>
                                            {workouts[workout].title}
                                        </a>
                                    </h1>
                                    <h2>{workouts[workout].description}</h2>
                                </div>
                            ))
                        }
                    </center>
                </div>
                </div>
        )
    };
}


export default Workouts;
