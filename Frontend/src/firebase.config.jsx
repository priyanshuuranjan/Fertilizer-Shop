import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0jaqpaL0ePRCzuJPi690XOOTbrls6_2w",
  authDomain: "fertilizerecom.firebaseapp.com",
  projectId: "fertilizerecom",
  storageBucket: "fertilizerecom.firebasestorage.app",
  messagingSenderId: "178564455441",
  appId: "1:178564455441:web:48f658e3a9062cc31f25b0"
};


export const app = initializeApp(firebaseConfig);