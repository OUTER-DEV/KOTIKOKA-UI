"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authProvider } from "@/app/providers/login/loginAPI"
import './signIn.css';
const Register = () => {
    const router = useRouter();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const name = event.target.elements.name.value;
      const username = event.target.elements.username.value;
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
  
      try {
        await authProvider.createUser(username,name, password, email);
        router.push("/login");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <>
      <body>

      <Link href="/">
      <label>
        <img className="_Logo" src="/images/mainLogo.png"></img>
      </label></Link>
  
        <div className="container">
          <img className="_left" src="/images/b.png"></img>
          <div className="_right">
             <h1>
            INSCRIPTION
          </h1>
          <form onSubmit={handleSubmit}>
            <input className="_input" type="text" placeholder="Nom" name="name" />
            <br />
            <input className="_input" type="text" placeholder="Nom d'utilisateur" name="username" />
            <br />
            <input className="_input" placeholder="E-mail" type="email" name="email" />
            <br />
            <input className="_input" type="password" placeholder="Mot de passe" name="password" />
              <button className="_bton" type="submit">Créer un compte</button>
          </form>
          </div>
         
          
          </div>
      </body>

        
        
      </>
    );
  };
  
  export default Register;