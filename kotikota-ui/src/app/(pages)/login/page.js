"use client"
import React, {useState} from "react";
import Link from "next/link";
const Login = ()=>{
    const [clicked, setClicked]= useState(false);

    return(
        <>
        <nav>
             <Link href="/" >Go to main </Link> 
        </nav>
      
        <h1> Login here</h1>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"/>
        <button>Clic</button>
        </>
    )
}
export default Login;