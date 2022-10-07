import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { json, Route, useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../UserAuth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "../Workouts/Workouts.css"
import { getValue } from "@testing-library/user-event/dist/utils";

function MyWorkout() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [jsonWorkout, setJsonWorkout] = useState({});
    const [steps, setSteps] = useState([]);

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            console.log(user.uid);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    const deleteWorkout = (uid, workoutID) => {
        if(uid != 0){
            console.log(uid);

            fetch('https://localhost:7025/UserWorkouts/' + uid + '/' + workoutID, { method: 'DELETE' })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

            window.location.href = "/MyWorkouts";
        }
    }

    const addStep = () => {
        console.log(document.getElementById('next-time').value);
        let tempStep = {instruction: document.getElementById('next-step').value, workoutTime: document.getElementById('next-time').value};
    
        const list = [...steps, tempStep];
        setSteps(() => list);
    
        //resetting in put values
        document.getElementById('next-step').value = "";
        document.getElementById('next-time').value = "";
      }
    
      const removeStep = () => {
        let newlist = [];
    
        for(let i = 0; i < steps.length - 1; i++)
            newlist.push(steps[i]);
    
        setSteps(() => newlist);
      }
    
    useEffect(() => {
        if (loading) return;
        if (!user) {
            return navigate("/login");
        }
        fetchUserName();

        const params = new URLSearchParams(window.location.search);
        fetch('https://localhost:7025/Workouts/' + params.get("id"))
        .then((res) => res.json())
        .then((json) => {
            setJsonWorkout(json);

            document.getElementById('title').value = json.title;
            document.getElementById('description').value = json.description;

            let newList = [];
            for(let i = 0; i < json.steps.length; i++)
                newList.push(json.steps[i]);

            setSteps(newList);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [user, loading, setJsonWorkout, setSteps]);

    const updateWorkout = (workoutID) => {
        let tempSteps = [];
        let title = document.getElementById("title")
        let description = document.getElementById("description");
        let stepInstructions = document.getElementsByClassName("step-instruction");
        let stepTimes = document.getElementsByClassName("step-time");
    
        console.log(stepInstructions);
        console.log(stepTimes);
    
        for(let i = 0; i < stepInstructions.length; i++){
          tempSteps.push({instruction: stepInstructions[i].value, workoutTime: stepTimes[i].value});
        };
    
        let jsonRes = {title: title.value, description: description.value, steps: tempSteps}
    
        console.log('user id ' + user.uid);
        console.log(JSON.stringify(jsonRes, null, 4));
    
        fetch('https://localhost:7025/UserWorkouts/Update/' + user.uid + '/' + workoutID, {
          method: 'PUT',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(jsonRes)
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));

        window.location.href = "/MyWorkouts";
      }

    return (
        <div className="myworkouts">
            <h1>Logged in as</h1>
            <div>{name}</div>
            <div>{user?.email}</div>
            <center>
            <label>Title</label><br></br>
            <input type="text" id="title" placeholder="Title"></input><br></br>
            <label>Description</label>Description<br></br>
            <input type="text" id="description" placeholder="Description"></input><br></br>
            {
                (steps || []).map((step, index) => {
                    return (
                        <div key={index}>
                        {/*{step.instruction} | time: {step.time} min*/}
                            <input className="step-instruction" type="text" defaultValue={step.instruction}></input>
                            <input className="step-time" type="number" defaultValue={step.workoutTime}></input>
                        </div>
                    );
            })}
        <label>Next Step</label><br></br>
        <input type="text" id="next-step" placeholder="Instruction"></input>
        <input type="number" id="next-time" placeholder="Time (min)"></input>
        <button onClick={addStep}>Add Step</button>
        <button onClick={removeStep}>Remove Step</button>
        <button onClick={() => updateWorkout(jsonWorkout.workoutID)}>Update Workout</button>
        <button onClick={() => deleteWorkout(user.uid || 0, jsonWorkout.workoutID)}>Delete Workout</button>
            </center>
        </div>
    );
}


export default MyWorkout;
