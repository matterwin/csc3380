import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { act } from "react-dom/test-utils";
import "./Workouts.css"

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
            <div className="loading">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif" alt="load"  />
                <h1 className="load--phrase">Loading Workouts</h1>
            </div>
        )

        return(
            <div>
                <center>
                    {
                        Object.keys(workouts).map((workout, i) => (
                            <div className="workout" key={i}>
                                <h1>
                                    {/*workouts[workout].workoutID}*/}
                                    <a href={"/Workout?id=" + workouts[workout].workoutID}>
                                        {workouts[workout].title}
                                    </a>
                                </h1>
                                <h2>{workouts[workout].description}</h2>
                            </div>
                        ))
                    }
                </center>
            </div>
        )
    };
}


export default Workouts;