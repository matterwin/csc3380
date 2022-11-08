import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../UserAuth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./AddWorkout.css"
import launchsettings from "../../launchsettings.json"

function AddWorkout() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [steps, setSteps] = useState([]);
  const [workoutTypes, setWorkoutTypes] = useState([]);


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

  useEffect(() => {
    if (loading) return;
    if (!user) {
      console.info("User must be loggin in to access this page!");
      return navigate("/Login");
    }

    fetchUserName();
    fetchUserWorkoutTypes();
  }, [user, loading]);

  const addStep = () => {
    let tempStep = { instruction: document.getElementById('next-step').value, unit: document.getElementById('next-unit').value };

    if (!tempStep.instruction) {
      // TODO::show error message to user
      console.error('error one or more inputs fields were null');
      return;
    }

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

  const submitWorkout = () => {
    let tempSteps = [];
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let stepInstructions = document.getElementsByClassName("step-instruction");
    let stepUnits = document.getElementsByClassName("step-unit");
    let workoutType = document.getElementById('workoutType').value;

    if (!title.value || !description.value) {
      // TODO::show error message to user
      console.log('error one ore more inputs fields were null');
      return;
    }

    console.log(stepInstructions);
    console.log(stepUnits);

    for (let i = 0; i < stepInstructions.length; i++) {
      if (!stepInstructions[i].value) {
        // TODO::show user error
        console.error('one ore more input fields were null');
        return;
      }

      tempSteps.push({ instruction: stepInstructions[i].value, unit: stepUnits[i].value});
    };

    let jsonRes = { title: title.value, description: description.value, steps: tempSteps, workoutType: workoutType }

    fetch(`${launchsettings.SERVER_URL}UserWorkouts/${user.uid}`, {
      method: 'post',
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
        <div className="addWorkout__added-space"></div>
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
                        <input className="step-unit" type="test" defaultValue={step.unit} placeholder="Unit"></input>
                    </div>
                );
        })}
        <label>Create Step</label><br></br>
        <input className="instruction" type="text" id="next-step" placeholder="Instruction"></input>
        <div className="space"></div>
        <input className="unit" id="next-unit" placeholder="Unit"></input>
       
        <div className="buttons">
          <br></br>
        <button className = "Btn" onClick={addStep}><span>Add Step</span></button>
        <div className="space"></div>
        <button className = "Btn" onClick={removeStep}><span>Remove A Step</span></button>
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
        <br></br>
        <button className = "Btn" onClick={submitWorkout}><span>Submit Workout</span></button>
        </div>
        </div>
    </center>
  );
}

export default AddWorkout;
