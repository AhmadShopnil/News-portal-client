// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcM3vpImm_Vvel66sHYE_USPDVEMi0w1o",
    authDomain: "news-portal-1b87a.firebaseapp.com",
    projectId: "news-portal-1b87a",
    storageBucket: "news-portal-1b87a.appspot.com",
    messagingSenderId: "53900073657",
    appId: "1:53900073657:web:56f4d21b9ee3e826101968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app