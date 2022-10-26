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

 /* let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  console.log('Full document height, with scrolled out part: ' + scrollHeight);*/

  const handleScroll = () => {
    const position = window.pageYOffset;/* + 1041;*/
    /*console.log(position);  */
    /*console.log("                             " + (100*(position)) / scrollHeight);*/
    setScrollPosition(position);
  };

  //Have been trying to figure out horizontal position scroll

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const myComponentStyle = { 
    top: '62px',
    backgroundColor: 'white',
    color: 'white',
    paddingLeft: scrollPosition,
    overflow: 'hidden',
    position: 'fixed',
    zIndex: 9999
 } 

  /*{
    location.pathname != '/Login'  && location.pathname != '/Register' && <div style={myComponentStyle}>&nbsp;</div>
  }*/

  return (
    <div>
      <div className="app">       
        <Router>
          {
            location.pathname != '/Login'  && location.pathname != '/Register' && <Navbar />
          }
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
