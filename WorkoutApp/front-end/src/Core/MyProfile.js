import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../UserAuth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./MyProfile.css";

function MyProfile() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

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
        alert("User must be loggin in to access this page!");
        return navigate("/login");
    }
    
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="myprofile">
       <div className="myprofile__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="myprofile__btn" onClick={logout}>
          Logout
         </button>
       </div>
     </div>
  );
}

export default MyProfile;