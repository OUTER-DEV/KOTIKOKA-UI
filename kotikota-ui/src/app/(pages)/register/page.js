"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authProvider } from "@/app/providers/login/loginAPI"
const Register = () => {
    const router = useRouter();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const name = event.target.elements.name.value;
      const username = event.target.elements.username.value;
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
  
      try {
        await authProvider.createUser(name, username, email, password);
        router.push("/login");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <>
        <nav>
          <Link href="/">Go to main</Link>
        </nav>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" />
          <br />
          <input type="text" placeholder="username" name="username" />
          <br />
          <input placeholder="email" type="email" name="email" />
          <br />
          <input type="password" placeholder="password" name="password" />
          <br />
          <button type="submit">Create account</button>
        </form>
      </>
    );
  };
  
  export default Register;