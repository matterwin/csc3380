import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./UserAuth/Login";
import Register from "./UserAuth/Register";
import MyProfile from "./Core/MyProfile";
import Workouts from "./Core/Workouts";
import MyWorkouts from "./Core/MyWorkouts";
import Workout from "./Core/Workout";
import Navbar from "./Core/Navbar";
import AddWorkout from "./Core/AddWorkout"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Workouts />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/myprofile" element={<MyProfile />} />
          <Route exact path="/myworkouts" element={<MyWorkouts />} />
          <Route exact path="/workout" element={<Workout />} />
          <Route exact path="/add-workout" element={<AddWorkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
