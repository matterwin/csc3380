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

        return(
            <div>
                <div><pre>{ JSON.stringify(workouts, null, 2) }</pre></div>;
            </div>
        )
    };
}


export default Workouts;