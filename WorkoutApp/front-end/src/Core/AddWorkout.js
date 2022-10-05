import React, { useEffect, useState, useRef } from "react";
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
    const list = [...steps, 'new step'];
    setSteps(() => list);
  }

  const removeStep = () => {
    let newlist = [];

    for(let i = 0; i < steps.length - 1; i++)
        newlist.push(steps[i]);

    setSteps(() => newlist);
  }

  return (
    <center>
        {/*this is temp for line spacing*/}
        <br></br><br></br><br></br><br></br>
        <label>Title</label><br></br>
        <input type="text" id="title"></input><br></br>
        <label>Description</label><br></br>
        <input type="text" id="description"></input><br></br>
        <div>
        </div>
        {
            (steps || []).map((element, index) => {
                return (
                    <div key={index}>
                    <h2>{element}</h2>
                    </div>
                );
        })}
        <label>Next Step</label><br></br>
        <input type="text" id="next-step"></input>
        <button onClick={addStep}>Add Step</button>
        <button onClick={removeStep}>Remove Step</button>
    </center>
  );
}

export default AddWorkout;