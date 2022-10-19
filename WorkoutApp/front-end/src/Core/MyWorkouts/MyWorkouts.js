import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../UserAuth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./MyWorkouts.css"
import launchsettings from "../../launchsettings.json"

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

        fetch(`${launchsettings.SERVER_URL}UserWorkouts/${user.uid}`)
            .then((res) => res.json())
            .then((json) => {
                if (json?.status != 404)
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
                
            <div className="welcomeMessage">Welcome to Fit Happens, <div className = "typing">{name} <span className="wave">👋</span></div></div>
            <center>
                <br></br>
                <a className = "addWorkout" href={"/AddWorkout"}>Click here to add a personal workout!</a>
                {
                    Object.entries(jsonWorkouts).map(([key, value]) => {
                        return (
                            <div className="workout" key={key}>
                                <h1>
                                    <a href={"/MyWorkout?id=" + value.id}>{value.title}</a>
                                </h1>
                                <h2>{value.description}</h2>
                                <h3>{value.workoutType}</h3>
                                <img width="200" height="200" src={require(`../../Gifs/${value.workoutType}.gif`)}></img>
                            </div>
                        )
                    })
                }
            </center>         
        </div>
    );
}


export default MyWorkouts;
