"use client"

import axios from "axios";

const app = axios.create({
  headers:{
    'Content-Type': 'application/json',
  }
})
const baseURL = process.env.NEXT_PUBLIC_URL
export const authProvider = {
  createUser: async (username, name, password, email) => {
    const response = await app.post(baseURL + "/auth/signup", {
      "username": username,
      "name": name,
      "password": password,
      "email": email
    });
    return response.data;
  },

  login: async (username, password) => {
    const user = app.post(baseURL + "/auth/login", {
      "username": username,
      "password": password
    });
    return user.data;
  },

  whoami: async (token) => {
    return app.get(baseURL +"/users/whoami",{
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