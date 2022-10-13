import React from "react";
import "./Workouts.css"
import launchsettings from "../../launchsettings.json"

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
        const { workoutsLoaded, workouts, numWorkouts, numWorkoutsLoaded, workoutTypes, workoutTypesLoaded } = this.state;


        // Something is not loaded
        if (!workoutsLoaded || !numWorkoutsLoaded) return (
            <div className="loading">
                <img src={require('../../Gifs/Loading.gif')} alt="Load" />
                <h1 className="load--phrase">Loading Workouts</h1>
            </div>
        )

        return (
            <div className="container">
                <div className="welcome-screen">
                    <center>
                        <img className="gif" src={require('../../Gifs/PatricSlappingKnees.gif')} />
                    </center>
                    <h1>Fit happens, it's inevitable</h1>
                    <h2>Get your fit on and explore, conquer, and commit your fitness goals</h2>
                    <img className="gif2" src={require('../../Gifs/PatrickBlowingBubble.gif')} />
                </div>
                <div className="preview-workouts">
                    <center>
                        <br></br>
                        {
                            [...Array(parseInt((numWorkouts / this.workoutsSize) + 1)) || []].map((key, value) => {
                                return (
                                    <button type="button"
                                        disabled={(value + 1 == this.currentWorkoutPage)}
                                        key={value}
                                        onMouseUp={() => this.nextWorkouts(value + 1)}>
                                        {value + 1}
                                    </button>
                                )
                            })
                        }
                        {
                            Object.keys(workouts || "").map((workout, i) => (
                                <div className="workout" key={i}>
                                    <h1>
                                        {/*workouts[workout].workoutID}*/}
                                        <a href={"/Workout?id=" + workouts[workout].workoutID}>
                                            {workouts[workout].title}
                                        </a>
                                    </h1>
                                    <h2>{workouts[workout].description}</h2>
                                    <h3>{workouts[workout].workoutType}</h3>
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
