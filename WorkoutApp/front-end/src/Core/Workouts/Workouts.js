import React from "react";
import "./Workouts.css"
import launchsettings from "../../launchsettings.json"
import { NavLink } from 'react-router-dom';

class Workouts extends React.Component {
    // This is the amount of workouts we display on each page
    workoutsSize = 5;
    currentWorkoutPage = 1;
    maxWorkoutPages = 10;

    constructor(props) {
        super(props);

        this.state = {
            workouts: [],
            workoutsLoaded: false,
            numWorkouts: 0,
            numWorkoutsLoaded: false,
            user: null
        }
    }

    fetchWorkouts(url) {
        fetch(url)
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

    fetchNumWorkouts(url) {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    numWorkouts: json,
                    numWorkoutsLoaded: true
                });

                if (this.state.numWorkouts > this.maxWorkoutPages) {
                    this.setState({
                        numWorkouts: this.maxWorkoutPages
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async componentDidMount() {
        this.fetchWorkouts(`${launchsettings.SERVER_URL}Workouts/1/${this.workoutsSize}`);
        this.fetchNumWorkouts(`${launchsettings.SERVER_URL}Workouts/Count`);
    }

    nextWorkouts(numWorkout) {
        this.currentWorkoutPage = numWorkout;

        this.fetchWorkouts(`${launchsettings.SERVER_URL}Workouts/${numWorkout}/${this.workoutsSize}`);
        this.fetchNumWorkouts(`${launchsettings.SERVER_URL}Workouts/Count`);
    }

    render() {
        // This is the amount of workouts we display on each page
        let { workoutsLoaded, workouts, numWorkouts, numWorkoutsLoaded, workoutTypes, workoutTypesLoaded } = this.state;

        // Something is not loaded
        if (!workoutsLoaded || !numWorkoutsLoaded) return (
            <div className="loading">
                 <img src={'/Gifs/Loading.gif'} alt="Load" />
            </div>
        )

        if(numWorkouts % this.workoutsSize == 0)
            numWorkouts--;

        return (
            <div className="container">
                <div className="welcome-screen">
                    <center>
                        <img className="gif" src={'/Gifs/tiger.gif'} />
                    </center>
                    <h1>Fit happens<div className="can-get-rid">,&nbsp;it's&nbsp;</div>
                        <div className="slidingVertical">
                            <span>inevitable.</span>
                            <span>inexorable.</span>
                            <span>ineliminable.</span>
                            <span>ineluctable.</span>
                            <span>inescapable.</span>
                        </div>
                    </h1>
                    <h2>Get your fit on and explore, chase, and conquer your fitness goals</h2>
                    <img className="gif2" src={'/Gifs/stickman.gif'} />
                </div>
                <div className="preview-workouts">
                    <center className="note-box">
                        <h1 className="box-h1">You can view other people's workouts down below.</h1>
                        <h3 className="box-h3">It's up to you to create your own workout to share to others! 
                        Feel free to post whatever content you want. Fit Happens is where every idea is welcomed:</h3>
                        <div className="gifs--box">
                            <img src={'/Gifs/back.gif'} className="back--Gif"></img>
                            <img src={'/Gifs/cardio.gif'} className="cardio--Gif"></img>
                            <img src={'/Gifs/chest.gif'} className="chest--Gif"></img>
                            <img src={'/Gifs/arms.gif'} className="arms--Gif"></img>
                            <img src={'/Gifs/core.gif'} className="core--Gif"></img>
                            <img src={'/Gifs/legs.gif'} className="legs--Gif"></img>
                        </div>
                    </center>
                </div>
                <br></br>

                <div className="preview">
                <center>
                    <div className="nav2">
                        {
                            [...Array(parseInt(numWorkouts / this.workoutsSize) + 1) || []].map((key, value) => {
                                return (
                                    <>          
                                        <NavLink key={value} disabled={(value + 1 == this.currentWorkoutPage)} 
                                            onClick={() => this.nextWorkouts(value - 1)}>
                                            <img className="left-arrow" src={`/Gifs/left-arrow.png`}/>
                                        </NavLink>
                                        &nbsp;&nbsp;&nbsp;                      
                                        <button className="workoutPages" disabled="true"> {this.currentWorkoutPage} </button>
                                        &nbsp;&nbsp;&nbsp;
                                        <NavLink key={value} disabled={(value + 1 == this.currentWorkoutPage)} 
                                            onClick={() => this.nextWorkouts(value + 1)}><
                                            img className="right-arrow" src={`/Gifs/right-arrow.png`}/>
                                        </NavLink>
                                        {/* <button 
                                            className="workoutPages" 
                                            type="button"
                                            disabled={(value + 1 == this.currentWorkoutPage)}
                                            key={value}
                                        >
                                            {this.currentWorkoutPage}
                                        </button>
                                        */}
                                    </>

                                )
                            })
                        }
                    </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        {
                            Object.keys(workouts || "").map((workout, i) => (
                                
                                <div className="card">
                                    <div className="card--badge">{workouts[workout].workoutType}</div>
                                    <img 
                                        src={`/Gifs/${workouts[workout].workoutType}.gif`} 
                                        className="card--image" 
                                    />
                                    <p className="card--title"><a href={"/Workout?id=" + workouts[workout].id}>
                                            {workouts[workout].title}
                                        </a></p>
                                    <p className="desc"> {workouts[workout].description} </p>
                                    <NavLink
                                            end to={"/Workout?id=" + workouts[workout].id}
                                            className="btn__steps"
                                    >Steps</NavLink>
                                </div>
                            ))
                        }
                    </center>
                </div>
                <center>
                    <div className="footer">
                        <ul className="footer--list">
                            <li><p>&copy; 2022 Team MMM, Inc.</p></li>                         
                        </ul>
                    </div>
                </center>
            </div>
        )
    };
}


export default Workouts;