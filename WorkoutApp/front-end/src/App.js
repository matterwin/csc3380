import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./UserAuth/Login";
import Register from "./UserAuth/Register";
import MyProfile from "./Core/MyProfile";
import Workouts from "./Core/Workouts";
import MyWorkouts from "./Core/MyWorkouts";
import Navbar from "./Core/Navbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Workouts />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/myprofile" element={<MyProfile />} />
          <Route exact path="/myworkouts" element={<MyWorkouts />} />
        </Routes>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
