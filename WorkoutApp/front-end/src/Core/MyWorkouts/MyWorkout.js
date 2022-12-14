import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../UserAuth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./AddWorkout.css"
import launchsettings from "../../launchsettings.json"

function MyWorkout() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [jsonWorkout, setJsonWorkout] = useState({});
    const [steps, setSteps] = useState([]);
    const [workoutTypes, setWorkoutTypes] = useState([]);

    const fetchUserWorkoutTypes = async () => {
        try{
          const res = await fetch(`${launchsettings.SERVER_URL}Workouts/WorkoutTypes`);
          const json = await res.json();
    
          console.log(json);
    
          setWorkoutTypes(json);
        }catch(err){
          console.error(err);
          alert("an error occurred while fetching workout types");
        }
      }

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    const deleteWorkout = (workoutID) => {


        fetch(`${launchsettings.SERVER_URL}UserWorkouts/${workoutID}`, { method: 'DELETE' })
            .then((res) => {
                console.log(res);
                window.location.href = "/MyWorkouts";
            })
            .catch((err) => console.log(err));
    }

    const addStep = () => {
        let tempStep = { instruction: document.getElementById('next-step').value, unit: document.getElementById('next-unit').value };

        const list = [...steps, tempStep];
        setSteps(() => list);

        //resetting input values
        document.getElementById('next-step').value = "";
        document.getElementById('next-unit').value = "";
    }

    const removeStep = () => {
        let newlist = [];

        for (let i = 0; i < steps.length - 1; i++)
            newlist.push(steps[i]);

        setSteps(() => newlist);
    }

    useEffect(() => {
        if (loading) return;
        if (!user) {
            return navigate("/login");
        }
        fetchUserName();
        fetchUserWorkoutTypes();

        const params = new URLSearchParams(window.location.search);
        fetch(`${launchsettings.SERVER_URL}Workouts/${params.get("id")}`)
            .then((res) => res.json())
            .then((json) => {
                setJsonWorkout(json);

                document.getElementById('title').value = json.title;
                document.getElementById('description').value = json.description;
                document.getElementById('workoutType').value = json.workoutType;

                let newList = [];
                for (let i = 0; i < json.steps.length; i++)
                    newList.push(json.steps[i]);

                setSteps(newList);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [user, loading, setJsonWorkout, setSteps]);

    const updateWorkout = (workoutID) => {
        let tempSteps = [];
        let title = document.getElementById("title")
        let description = document.getElementById("description");
        let stepInstructions = document.getElementsByClassName("step-instruction");
        let stepUnits = document.getElementsByClassName("step-unit");
        let workoutType = document.getElementById('workoutType');

        if (!title.value || !description.value) {
            // TODO::display error to user
            console.error('one or more input fields were null');
            return;
        }

        for (let i = 0; i < stepInstructions.length; i++) {
            if (!stepInstructions[i].value) {
                // TODO::display error to user
                console.error('one or more input fields were null');
                return;
            }

            tempSteps.push({ instruction: stepInstructions[i].value, unit: stepUnits[i].value });
        };

        let jsonRes = { title: title.value, description: description.value, steps: tempSteps, workoutType: workoutType.value }

        console.log(jsonRes);

        fetch(`${launchsettings.SERVER_URL}UserWorkouts/${workoutID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonRes)
        })
        .then((res) => {
            console.log(res);
            window.location.href = "/MyWorkouts";
        })
        .catch((err) => console.log(err));
    }

    return (
        <center className="addWorkout">
            <div className="alignBox">
                <div className="titleBox"><br></br>
                <input type="text" id="title" placeholder="Title"></input></div><br></br>
                <div className="descriptionBox">
                <textarea id="description" placeholder="Description"></textarea></div><br></br>
                <label>Steps:</label><br></br>
                {
                    (steps || []).map((step, index) => {
                        return (
                            <div key={index}>
                                <input className="step-instruction" type="text" defaultValue={step.instruction} placeholder="Instruction"></input>
                                <input className="step-unit" type="text" defaultValue={step.unit} placeholder="Unit"></input>
                            </div>
                        );
                    })}
                <label>Create Step</label><br></br>
                <input className="instruction" type="text" id="next-step" placeholder="Instruction"></input>
                <div className="space"></div>
                <input className="unit" type="text" id="next-unit" placeholder="Unit"></input>
                <br></br><br></br>
                <label>Select a tag</label><br></br>
                <div className="tag"><select id="workoutType" name="Workout Type">
                {
                (workoutTypes).map(type => {
                    return (
                    <option value={type}>{type}</option>
                    );
                })
                }
                </select></div>
                <div className="buttons">
                    <button className = "Btn" onClick={addStep}><span>Add Step</span></button>
                    <div className="space"></div>
                    <button className = "Btn" onClick={removeStep}><span>Remove Step</span></button>
                    <div className="space"></div>
                    <button className = "Btn" onClick={() => updateWorkout(jsonWorkout.id)}><span>Update Workout</span></button>
                    <div className="space"></div>
                    <button className = "Btn" onClick={() => deleteWorkout(jsonWorkout.id)}><span>Delete Workout</span></button>
                </div>
                </div>
            </center>
    );
}


export default MyWorkout;
