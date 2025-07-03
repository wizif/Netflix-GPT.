// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBevDi4Z43bh9LZ6mhMst-nhAMCSSu9BOQ",
  authDomain: "netflix-gpt-fe7f2.firebaseapp.com",
  projectId: "netflix-gpt-fe7f2",
  storageBucket: "netflix-gpt-fe7f2.firebasestorage.app",
  messagingSenderId: "629478959183",
  appId: "1:629478959183:web:fef339c46174dfa3cea23a",
  measurementId: "G-VG8EF4VJR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
