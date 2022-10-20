import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./UserAuth/Login";
import Register from "./UserAuth/Register";
import MyProfile from "./Core/MyProfile/MyProfile";
import Workouts from "./Core/Workouts/Workouts";
import MyWorkouts from "./Core/MyWorkouts/MyWorkouts";
import Workout from "./Core/Workouts/Workout";
import Navbar from "./Core/Navbar/Navbar";
import AddWorkout from "./Core/MyWorkouts/AddWorkout"
import MyWorkout from "./Core/MyWorkouts/MyWorkout"

import { useEffect, useState } from "react";

import "./App.css"

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const myComponentStyle = { 
    top: '6vh',
    backgroundColor: 'white',
    color: 'white',
    paddingLeft: scrollPosition + 20,
    overflow: 'hidden',
    position: 'fixed',
    zIndex: 9999
 } 

  return (
    <div>
      <div style={myComponentStyle}>&nbsp;</div>
      <div className="app">       
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Workouts />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/MyProfile" element={<MyProfile />} />
            <Route exact path="/MyWorkouts" element={<MyWorkouts />} />
            <Route exact path="/Workout" element={<Workout />} />
            <Route exact path="/AddWorkout" element={<AddWorkout />} />
            <Route exact path="/MyWorkout" element={<MyWorkout />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
