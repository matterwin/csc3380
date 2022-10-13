import React from "react";
import "./Workouts.css"
import launchsettings from "../../launchsettings.json"

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
                <img src="https://subarucustomersupport.powerappsportals.com/blue-spinner.gif" alt="load" />
                <h1>Loading Workout</h1>
            </div>
        )

        return (
            <div>
                <center>
                    <div className="workout">
                        <h1>{workout.title}</h1>
                        <h2>{workout.description}</h2>
                        {
                            Object.keys(workout.steps).map((step, j) => (
                                <div className="workoutSteps" key={j}>
                                    <span>
                                        <p>Step {j + 1}: | {workout.steps[j].workoutTime} min | {workout.steps[j].instruction}</p>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </center>
            </div>
        )
    };
}


export default Workout;