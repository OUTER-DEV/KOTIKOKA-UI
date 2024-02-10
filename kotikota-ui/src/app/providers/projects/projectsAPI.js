"use client"
import axios from "axios"
import { bearerAuth } from "../helpers/Bearer"

const app = axios.create({
  headers:{
    'Content-Type': 'application/json',
    
  }
})
const baseURL = process.env.NEXT_PUBLIC_URL+"/auth"
export const projectsProvider = {
    getAllProjects: async ()=>{
        return (app.get(baseURL+"Projects/all",{
          headers : { 'Authorization': bearerAuth(user)}
        }))
    },

    getProjectsById: async(userid)=>{
      return (app.get(baseURL+"Projects/all",{
        headers : { 'Authorization': bearerAuth(user)}
      }))
    }
}