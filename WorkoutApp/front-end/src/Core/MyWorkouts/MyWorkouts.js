import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../UserAuth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./MyWorkouts.css"
import launchsettings from "../../launchsettings.json"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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
                
            <center className="welcome"><div className = "typing">Welcome to Fit Happens<span className="wave">👋</span></div></center>
            <center><h1 className="name">{name} </h1></center>
            <center>
                <br></br>
                <a href={"/AddWorkout"}><button type="button" className="addWorkoutBtn">Add workout</button></a>
                <br></br>
                <br></br>
                {
                    Object.entries(jsonWorkouts).map(([key, value]) => {
                        return (
                            <div>
                                <center className="step--workout">
                                    <div className="card">
                                        <div className="card--badge">{value.workoutType}</div>
                                        <img 
                                            src={`/Gifs/${value.workoutType}.gif`}
                                            className="card--image" 
                                        />
                                        <p className="card--title"> <Link to={`/MyWorkout?id=${value.id}`}>{value.title}</Link> </p>
                                        <p className="desc"> {value.description} </p>  
                                         <NavLink
                                            end to={`/MyWorkout?id=${value.id}`}
                                            className="btn__steps"
                                            >Edit</NavLink>                                      
                                    </div>
                                </center>
                            </div>
                        )
                    })
                }
            </center>         
        </div>
    );
}


export default MyWorkouts;
