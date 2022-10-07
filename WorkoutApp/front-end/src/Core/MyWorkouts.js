import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { json, useNavigate } from "react-router-dom";
import { auth, db, logout } from "../UserAuth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./Workouts.css"

function MyWorkouts() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [jsonWorkouts, setJsonWorkouts] = useState({});

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
    
    useEffect(() => {
        if (loading) return;
        if (!user) {
            return navigate("/login");
        }
        fetchUserName();

        fetch('https://localhost:7025/UserWorkouts/' + user.uid)
        .then((res) => res.json())
        .then((json) => {
            if(json?.status != 404)
                setJsonWorkouts(json);
            else
                setJsonWorkouts("");
        })
        .catch((err) => {
            console.log(err);
        })
    }, [user, loading]);

    return (
        <div className="myworkouts">
            <h1>Logged in as</h1>
            <div>{name}</div>
            <div>{user?.email}</div>
            <center>
            <a href={"/add-workout"}>Add Workout</a>
            {
                Object.entries(jsonWorkouts).map(([key, value]) => {
                    return (
                        <div className="workout">
                            <a href={"/my-workout?id=" + value.workoutID}>{value.title}</a>
                            <p>{value.description}</p>
                        </div>
                    )
                })
            }
            </center>
        </div>
    );
}


export default MyWorkouts;