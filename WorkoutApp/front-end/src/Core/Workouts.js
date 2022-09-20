import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { act } from "react-dom/test-utils";
import "./Workouts.css"

class step{
    constructor(time, instruction){
        this.time = time;
        this.instruction = instruction;
    }
}

class Workouts extends React.Component{    
    constructor(props){
        super(props);

        this.state = {
            workouts: [{"steps": [{}]}],
            workoutsLoaded: false
        }
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
                <h1>Loading Workouts</h1>
            </div>
        )

        return(
            <div>
                <center>
                    {
                        Object.keys(workouts).map((workout, i) => (
                            <div className="workout" key={i++}>
                                <h1>{workouts[workout].title}</h1>
                                {
                                    Object.keys(workouts[workout]).map((step, j) => (
                                        <div className="workoutSteps" key={j}>
                                            <span>
                                                <p>Step {j + 1}: | {workouts[workout].steps[j].time} min | {workouts[workout].steps[j].instruction}</p>
                                            </span>
                                        </div> 
                                    ))
                                }
                            </div>
                        ))
                    }
                </center>
            </div>
        )
    };
}


export default Workouts;