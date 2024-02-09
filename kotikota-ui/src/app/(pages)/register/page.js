"use client"
import React, {useState} from "react";
import Link from "next/link";
const Register = ()=>{
    const [clicked, setClicked]= useState(false);

    return(
        <>
        <nav>
             <Link href="/" >Go to main </Link> 
        </nav>
      
        <h1> Register here</h1>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"/>
        <button>Create account</button>
        </>
    )
}
export default Register;