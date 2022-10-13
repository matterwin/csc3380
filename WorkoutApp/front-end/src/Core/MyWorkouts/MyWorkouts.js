import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { json, useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../UserAuth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "../Workouts/Workouts.css"

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

        console.log(user.uid);

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
            <a href={"/AddWorkout"}>Add Workout</a>
            {
                Object.entries(jsonWorkouts).map(([key, value]) => {
                    return (
                        <div className="workout" key={key}>
                            <h1>
                                <a href={"/MyWorkout?id=" + value.workoutID}>{value.title}</a>
                            </h1>
                            <h2>{value.description}</h2>
                            <h3>{value.workoutType}</h3>
                        </div>
                    )
                })
            }
            </center>
        </div>
    );
}


export default MyWorkouts;
