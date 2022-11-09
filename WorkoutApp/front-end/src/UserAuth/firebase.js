import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	reload,
} from "firebase/auth";
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCcrK0X4CfCHWbD2k6Z92WqxyPxJMMMAkM",
	authDomain: "workoutapp-7b513.firebaseapp.com",
	projectId: "workoutapp-7b513",
	storageBucket: "workoutapp-7b513.appspot.com",
	messagingSenderId: "1056446136079",
	appId: "1:1056446136079:web:cf11d3908b22febe46487a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerWithEmailAndPassword = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, "users"), {
			uid: user.uid,
			name,
			authProvider: "local",
			email,
		});
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logInWithEmailAndPassword = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logout = () => {
	signOut(auth);
}

const userIsLoggedIn = auth.onAuthStateChanged(function (user) {
	if (user)
		return true;
	else
		return false;
})

export {
	auth,
	db,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	userIsLoggedIn,
	logout
}