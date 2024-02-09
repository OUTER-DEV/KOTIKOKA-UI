"use client"
import axios from "axios"

const app = axios.create({
  headers:{
    'Content-Type': 'application/json',
  }
})
const baseURL = process.env.NEXT_PUBLIC_URL+"/auth"
export const authProvider = {
    login: async(username,password) => {
      return ( app.post(baseURL+"/login",{
        username: username,
        password:password
      })).then((token=>{token.data
         console.log(token.data)}))
    },
  
    createUser: (username, name, password, email) => {
          const response = app.post(baseURL+"/signup", {
            username: username,
            name: name,
            password: password,
            email: email
          });
          return response.data;
      }
}