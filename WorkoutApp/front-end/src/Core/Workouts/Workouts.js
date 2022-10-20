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
        let { workoutsLoaded, workouts, numWorkouts, numWorkoutsLoaded, workoutTypes, workoutTypesLoaded } = this.state;

        // Something is not loaded
        if (!workoutsLoaded || !numWorkoutsLoaded) return (
            <div className="loading">
                <img src={require('../../Gifs/Loading.gif')} alt="Load" />
                <h1 className="load--phrase">Loading Workouts</h1>
            </div>
        )

        if(numWorkouts % this.workoutsSize == 0)
            numWorkouts--;

        return (
            <div className="container">
                <div className="welcome-screen">
                    <center>
                        <img className="gif" src={require('../../Gifs/PatricSlappingKnees.gif')} />
                    </center>
                    <h1>Fit happens, it's&nbsp;
                        <div className="slidingVertical">
                            <span>Inevitable.</span>
                            <span>Inexorable.</span>
                            <span>Ineliminable.</span>
                            <span>Iineluctable.</span>
                            <span>Inescapable.</span>
                        </div>
                    </h1>
                    <h2>Get your fit on and explore, conquer, and relish your fitness goals</h2>
                    <img className="gif2" src={require('../../Gifs/PatrickBlowingBubble.gif')} />
                </div>
                <div className="preview-workouts">
                    <center className="note-box">
                        <h1 className="box-h1">You can view other people's workouts down below.</h1>
                        <h3 className="box-h3">Click on the workout and leave a comment or rating down below (finish this mess)</h3>
                    </center>
                </div>
                <br></br>

                <div className="preview">
                <center>
                        <br></br>
                        {
                            [...Array(parseInt(numWorkouts / this.workoutsSize) + 1) || []].map((key, value) => {
                                return (
                                    <button className="workoutPages" type="button"
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
                                        <a href={"/Workout?id=" + workouts[workout].id}>
                                            {workouts[workout].title}
                                        </a>
                                    </h1>
                                    <h2>{workouts[workout].description}</h2>
                                    <h3>{workouts[workout].workoutType}</h3>
                                    <img width="100" height="100" src={require(`../../Gifs/${workouts[workout].workoutType}.gif`)}></img>
                                </div>
                            ))
                        }
                    </center>
                </div>
                <div className="curve">
                </div>
                <div className="added-space"></div>
                <div className="footer">
                    <ul className="footer--list">
                        <li><p>&copy; 2022, Team MMM</p></li>  
                    </ul>
                </div>
            </div>
        )
    };
}


export default Workouts;