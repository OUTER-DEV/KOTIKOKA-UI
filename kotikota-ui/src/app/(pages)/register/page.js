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
      <nav>
          <img src="/images/retour.png" alt="retour"/>
          <Link href="/"><p>Go to main</p></Link>
        </nav>

        <div className="container">
          <h1>
            INSCRIPTION
          </h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="nom" name="name" />
            <br />
            <input type="text" placeholder="Nom d'utilisateur" name="username" />
            <br />
            <input placeholder="e-mail" type="email" name="email" />
            <br />
            <input type="password" placeholder="mot de" name="password" />
            <br />
            
              <button type="submit">Créer un compte</button>
           
              
          </form>
          </div>
      </body>

        
        
      </>
    );
  };
  
  export default Register;