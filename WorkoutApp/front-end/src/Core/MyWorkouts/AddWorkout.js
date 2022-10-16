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
  let [steps, setSteps] = useState([]);

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

  useEffect(() => {
    if (loading) return;
    if (!user) {
      console.info("User must be loggin in to access this page!");
      return navigate("/Login");
    }

    fetchUserName();
  }, [user, loading]);

  const addStep = () => {
    let tempStep = { instruction: document.getElementById('next-step').value, time: document.getElementById('next-time').value };

    if (!tempStep.instruction || !tempStep.time) {
      // TODO::show error message to user
      console.error('error one or more inputs fields were null');
      return;
    }

    const list = [...steps, tempStep];
    setSteps(() => list);

    //resetting input values
    document.getElementById('next-step').value = "";
    document.getElementById('next-time').value = "";
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
    let stepTimes = document.getElementsByClassName("step-time");

    // need to fix this to selected workout type
    let workoutType = "arms";

    if (!title.value || !description.value) {
      // TODO::show error message to user
      console.log('error one ore more inputs fields were null');
      return;
    }

    console.log(stepInstructions);
    console.log(stepTimes);

    for (let i = 0; i < stepInstructions.length; i++) {
      if (!stepInstructions[i].value || !stepTimes[i].value) {
        // TODO::show user error
        console.error('one ore more input fields were null');
        return;
      }

      tempSteps.push({ instruction: stepInstructions[i].value, workoutTime: stepTimes[i].value });
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
        <div className="alignBox">
        <div className="titleBox"><label>Title: </label><br></br>
        <input type="text" id="title" placeholder="Title"></input></div><br></br>
        <div className="descriptionBox">
        <label>Description</label><br></br>
        <input type="text" id="description" placeholder="Description"></input></div><br></br>
        {
            (steps || []).map((step, index) => {
                return (
                    <div key={index}>
                      {/*{step.instruction} | time: {step.time} min*/}
                        <input className="step-instruction" type="text" defaultValue={step.instruction}></input>
                        <input className="step-time" type="number" defaultValue={step.time}></input>
                    </div>
                );
        })}
        <label>Next Step</label><br></br>
        <input type="text" id="next-step" placeholder="Instruction"></input>
        <div className="space"></div>
        <input type="number" id="next-time" placeholder="Time (mins)"></input>
        <br></br>
        <div className="buttons">
          <br></br>
        <button className = "Btn" onClick={addStep}><span>Add New Step</span></button>
        <div className="space"></div>
        <button className = "Btn" onClick={removeStep}><span>Remove A Step</span></button>
        <div className="space"></div>
        <button className = "Btn" onClick={submitWorkout}><span>Submit Workout</span></button>
        </div>
        </div>
    </center>
  );
}

export default AddWorkout;
