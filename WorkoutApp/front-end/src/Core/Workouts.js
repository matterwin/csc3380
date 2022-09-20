import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { act } from "react-dom/test-utils";

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

        let workoutsHTML = [];

        let stepNumber = 0;
        workouts.forEach((workout) => {
            workoutsHTML.push(<h3>{workout.title}</h3>);
            let steps = workout.steps;
            steps.forEach((step) => {
                workoutsHTML.push(<p>Step {++stepNumber}: | {step.time} min | {step.instruction}</p>);
            })
        })

        return(
            <div>
                {
                    workoutsHTML
                }
            </div>
        )
    };
}


export default Workouts;