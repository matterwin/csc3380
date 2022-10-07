import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { json, Route, useNavigate } from "react-router-dom";
import { auth, db, logout } from "../UserAuth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./Workouts.css"
import { getValue } from "@testing-library/user-event/dist/utils";

function MyWorkout() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [jsonWorkout, setJsonWorkout] = useState({});

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
        })
        .catch((err) => {
            console.log(err);
        })
    }, [user, loading, setJsonWorkout]);

    return (
        <div className="myworkouts">
            <h1>Logged in as</h1>
            <div>{name}</div>
            <div>{user?.email}</div>
            <center>
            <div className="workout">
                <h1>{jsonWorkout.title}</h1>
                <p>{jsonWorkout.description}</p>
                {
                    Object.entries(jsonWorkout.steps || {}).map(([key, value]) => {
                        return (
                            <p className="step">{value.instruction} | {value.workoutTime} min</p>
                        )
                    })
                }

            <button onClick={() => deleteWorkout(user.uid || 0, jsonWorkout.workoutID)}>Delete Workout</button>
            </div>
            </center>
        </div>
    );
}


export default MyWorkout;