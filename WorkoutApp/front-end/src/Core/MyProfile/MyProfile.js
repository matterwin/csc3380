import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../UserAuth/firebase";
import { query, collection, getDocs, where, connectFirestoreEmulator } from "firebase/firestore";
import "./MyProfile.css";
import launchsettings from "../../launchsettings.json"

function MyProfile() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const fetchUser = async () => {
    try{
      const userExists = await fetch(`${launchsettings.SERVER_URL}User/${user.uid}`);

      let jsonUserInfo = {};

      // create the user
      if(userExists.status == 404){
        console.log('creating new user');

        try{
          const res = await fetch(`${launchsettings.SERVER_URL}User/${user.uid}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
          });
          const json = await res.json();
          jsonUserInfo = json;
        }catch(err){
          console.log(err);
        }


      }else{ // user already exists so fetch user data
        const res = await fetch(`${launchsettings.SERVER_URL}User/${user.uid}`);
        const json = await res.json();
        jsonUserInfo = json;
      }

      // user now exists so dislay data
      setUserInfo(jsonUserInfo)

      document.getElementById('firstName').value = jsonUserInfo.firstName || "";
      document.getElementById('middleName').value = jsonUserInfo.middleName || "";
      document.getElementById('lastName').value = jsonUserInfo.lastName || "";
      document.getElementById('birthDate').value = jsonUserInfo.birthDate?.substring(0, 10) || "";
      document.getElementById('weight').value = jsonUserInfo.weight || "";

    }catch(err){
      console.error(err);
    }
  }

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      console.error("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) {
      console.log("User must be loggin in to access this page!");
      return navigate("/Login");
    }

    fetchUserName();
    fetchUser();
  }, [user, loading]);

  const updateUserInfo = () => {
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;
    const weight = document.getElementById('weight').value;

    let jsonUserInfo = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      birthDate: birthDate,
      weight: weight
    };

    fetch(`${launchsettings.SERVER_URL}User/${userInfo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonUserInfo)
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    window.location.href = "/MyProfile";
  }

  return (
    <div className="myprofile">
      <div className="myprofile__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <table>
        <tr>
        <td align="left">First Name:<div className="space"></div></td>  
        <input className="firstName" id="firstName" placeholder="First Name"></input>
        </tr>
        <tr>
        <td align="left">Middle Name:<div className="space"></div></td>  
        <input className="middleName" id="middleName" placeholder="Middle Name"></input>
        </tr>
        <tr>
        <td align="left">Last Name:<div className="space"></div></td>   
        <input className="lastName" id="lastName" placeholder="Last Name"></input>
        </tr>
        <tr>
        <td align="left">Birth Date:<div className="space"></div></td>   
        <input className="birthDate" id="birthDate" type="date" placeholder="Birth Date"></input>
        </tr>
        <tr>
        <td align="left">Weight:<div className="space"></div></td>   
        <input className="weight" id="weight" type="number" placeholder="Weight"></input>
        </tr>
        </table>
        <div className="space"></div>
        <div className="space"></div>
        <button className="update_btn" onClick={() => updateUserInfo()}>Update Profile</button>
        <button className="logout_btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default MyProfile;
