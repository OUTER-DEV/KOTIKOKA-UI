"use client"
import axios from "axios"

const app = axios.create({
  headers:{
    'Content-Type': 'application/json',
  }
})
const baseURL = process.env.NEXT_PUBLIC_URL+"/auth"
export const authProvider = {
  login: async (username, password) => {
    const user = await app.post(baseURL + "/login", {
      "username": username,
      "password": password
    });
    console.log(user.status);
    return user.data;
  },

  createUser: async (username, name, password, email) => {
    const response = await app.post(baseURL + "/signup", {
      "username": username,
      "name": name,
      "password": password,
      "email": email
    });
    return response.data;
  },
};