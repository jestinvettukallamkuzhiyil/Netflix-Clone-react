import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
  // authDomain: "react-auth-6788d.firebaseapp.com",
  // projectId: "react-auth-6788d",
  // storageBucket: "react-auth-6788d.appspot.com",
  // messagingSenderId: "131797845021",
  // appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
  // measurementId: "G-VWPBR1NSLL",

   apiKey: "AIzaSyCuybyINahMw71L6i-1EDd4oz4RkxN75cY",
  authDomain: "netfilx-clone-1e189.firebaseapp.com",
  databaseURL: "https://netfilx-clone-1e189-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netfilx-clone-1e189",
  storageBucket: "netfilx-clone-1e189.appspot.com",
  messagingSenderId: "1025488965807",
  appId: "1:1025488965807:web:3e5737a3e8dc0d839c845a",
  measurementId: "G-C3WPY9WJX3",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
