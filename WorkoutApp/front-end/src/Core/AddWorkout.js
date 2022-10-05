import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../UserAuth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { setPersistence } from "firebase/auth";


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
        console.log("User must be loggin in to access this page!");
        return navigate("/login");
    }
    
    fetchUserName();
  }, [user, loading]);

  const addStep = () => {
    let tempStep = {instruction: document.getElementById('next-step').value, time: document.getElementById('next-time').value};

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

  const submitWorkout = () => {
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

    fetch('https://localhost:7025/UserWorkouts/' + user.uid, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(jsonRes)
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <center>
        {/*this is temp for line spacing*/}
        <br></br><br></br><br></br><br></br>
        <label>Title</label><br></br>
        <input type="text" id="title" placeholder="Title"></input><br></br>
        <label>Description</label>Description<br></br>
        <input type="text" id="description" placeholder="Description"></input><br></br>
        <div>
        </div>
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
        <input type="number" id="next-time" placeholder="Time (min)"></input>
        <button onClick={addStep}>Add Step</button>
        <button onClick={removeStep}>Remove Step</button>
        <button onClick={submitWorkout}>Submit Workout</button>
    </center>
  );
}

export default AddWorkout;