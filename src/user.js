import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAg0WyEiR0PfwQrW0eVwvomJF-f4CdC0SE",
  authDomain: "prakash-c18b2.firebaseapp.com",
  projectId: "prakash-c18b2",
  storageBucket: "prakash-c18b2.appspot.com",
  messagingSenderId: "1034393068704",
  appId: "1:1034393068704:web:40b3212528cbb4b51415c5",
  measurementId: "G-0L9FN724VG"
};
  
  const app = initializeApp(firebaseConfig);
  const auth=getAuth()
  
export  function UserAuth(){

    const[user,setUser]=useState()
    useEffect(()=>{
     let o=onAuthStateChanged(auth,user=>setUser(user))
     return o
    },[])
   return user
}