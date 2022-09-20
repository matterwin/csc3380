import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { act } from "react-dom/test-utils";

class Workouts extends React.Component{    
    constructor(props){
        super(props);

        this.state = {
            workouts: [],
            workoutsLoaded: false
        }
    }

    componentDidMount(){
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
                alert("Error fecthing all workouts!");
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

        for(let workout = 0; workout < workouts.length; workout++){
            for(const [key, value] of Object.entries(workouts)){
                console.log(JSON.stringify(value));
                console.log(JSON.stringify(value[0]));
                //console.log(workouts[0].steps[0].instruction);
            }
        }

        return(
            <div>
                {JSON.stringify(workouts)}
            </div>
        )
    };
}


export default Workouts;