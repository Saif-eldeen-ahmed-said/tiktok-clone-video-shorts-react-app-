// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAwcPsnNFWmXMtacGH1Wevw8m3sZpCnnHQ",
    authDomain: "tiktok-clone-5f64c.firebaseapp.com",
    projectId: "tiktok-clone-5f64c",
    storageBucket: "tiktok-clone-5f64c.appspot.com",
    messagingSenderId: "628490763644",
    appId: "1:628490763644:web:67ea2f38f846c3b236f8f9",
    measurementId: "G-RH7MG6R603"
  };


 initializeApp(firebaseConfig)



export default getFirestore()

