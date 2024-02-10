"use client"
import React, { useState } from "react";
import { authProvider } from "@/app/providers/login/loginAPI";
import Link from "next/link";
import { useRouter } from "next/navigation";
import './page.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authProvider.login(username, password);

      router.push("/accueil");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <img src="/images/cochon.jpg" alt="pig"></img>
      <div class="container">
      <h1>CONNECTEZ-VOUS</h1>
      <form onSubmit={handleSubmit}>
        <label className="username">
        <p>Nom d'utilisateur:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="nom_d_utilisateur"
          />
        </label>
        <label className="password">
          <p>Mot de passe:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </label>
        <br />
        <button type="submit">Se connecter</button>
      </form>
      </div>

      <div className="register">
        <img src="/images/signup.webp" alt="sign Up"/>
      <Link href="/register">
      <p>
        S'INSCRIRE
        </p></Link>

      </div>
    </div>
  );
};

export default Login;