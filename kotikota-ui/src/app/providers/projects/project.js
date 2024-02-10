"use client"
import axios from "axios"

const app = axios.create({
    headers:{
      'Content-Type': 'application/json',
    }
  })

const baseURL = process.env.NEXT_PUBLIC_URL+"/Projects"
export const dataProvider = {

launchProject: async(project) =>{
const newProject = await app.post(baseURL+"/launch",{

  "title": project.title,
  "description":project.description,
  "category": project.category,
  "targetAmount": project.targetAmount,
  "balance": project.balance,
  "deadline":project.deadline,
  "ownerId": project.ownerId
})
return newProject;
},
getAll:async (accessToken)=>{
    return app.get(baseURL+"/all?", {
    }).then((data)=>{
        return data;
    }).catch((e)=>{
         throw e;
        })
},

}