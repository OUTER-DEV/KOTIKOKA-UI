"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import './page.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
user = {username, password}
    try {
      
      await authProvider.login(user);

      router.push("/accueil");
    } catch (error) {
      throw(error);
    }
    
  };

  return (
    <div className="login">
      <img src="/images/cochon.jpg" alt="pig"></img>
      <div className="container">
      <h1>CONNECTEZ-VOUS</h1>
      <form onSubmit={handleSubmit}>
        <label className="username">
          <label className="_icon"> <FontAwesomeIcon style={{fontSize:"25px"}} icon={faUser}></FontAwesomeIcon></label>
          <input
            type="text"
            className="_input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="nom_d_utilisateur"
          />
        </label>
        <label className="password">
          <label className="_icon"> <FontAwesomeIcon style={{fontSize:"25px"}} icon={faLock}></FontAwesomeIcon></label>
          <input
            type="password"
            className="_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </label>
        <button type="submit">Se connecter</button>
      </form>
      </div>

      <div className="register">
    
      <Link className="_link" href="/inscription">
        S'INSCRIRE
      </Link>
    <img src="/images/signup.webp" alt="sign Up"/>
      </div>
      <div className="_bg"></div>

      <div>
        #NOTIFICATION
        <div>

        </div>
      </div>
    </div>
  );
};

export default Login;