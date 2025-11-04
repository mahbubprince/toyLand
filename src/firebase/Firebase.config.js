// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPmx6Nv7tEct8KvUahzVjXd0tb6e1oxJQ",
  authDomain: "toyland-d2c08.firebaseapp.com",
  projectId: "toyland-d2c08",
  storageBucket: "toyland-d2c08.firebasestorage.app",
  messagingSenderId: "307815390529",
  appId: "1:307815390529:web:3af16a42ec4393a835d5c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);