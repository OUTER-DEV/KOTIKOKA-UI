"use client"
import axios from "axios"

const app = axios.create({
  headers:{
    'Content-Type': 'application/json',
  }
})
const baseURL = process.env.NEXT_PUBLIC_URL+"/auth"
export const authProvider = {
  createUser: async (username, name, password, email) => {
    const response = await app.post(baseURL + "/signup", {
      "username": username,
      "name": name,
      "password": password,
      "email": email
    });
    return response.data;
  },

  login: async (username, password) => {
    const user = await app.post(baseURL + "/login", {
      "username": username,
      "password": password
    });
    console.log(user.data);
    return user.data;
  },

  whoami: async (token) => {
    return app.get(baseURL +"/whoami",{
      headers:{
        Authorization:"Bearer Token "+token
      }
    }).then((user)=>{
      return user.data;
    }).catch((e)=>{
      throw e;
    })
  }
};