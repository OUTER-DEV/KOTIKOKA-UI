"use client"
import React, {useState} from "react";
import { authProvider } from "@/app/providers/login/loginAPI"
import Link from "next/link";
import { useRouter } from "next/navigation";



const Login = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          await authProvider.login(username, password);
          
          router.push("/home");
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          user name:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
      <Link href="/register"> Go to register</Link>
    </div>
  );
}
export default Login;
