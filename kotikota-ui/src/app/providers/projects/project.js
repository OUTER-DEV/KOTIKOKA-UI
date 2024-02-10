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
  "targetAmount": project.targetAmount,
  "deadline":project.deadline,
  "category": project.category,
  "ownerId": project.id

})
return newProject;
},

getAll:async (accessToken)=>{
    return app.get(baseURL+"/all", {
       
    }).then((data)=>{
        return data.data;
    }).catch((e)=>{
         throw e;
        })
},

seeProject: async (accessToken)=>{
  return app.get(baseURL+"/"+accessToken
  ).then((data)=>{
      return data;
  }).catch((e)=>{
    throw e;
  })
},

contributeToProject: async (accessToken, projectId, contributionData) => {
  try {
    const response = await app.post(`${baseURL}/${projectId}/contribute`, contributionData);
    return response.data;
  } catch (error) {
    throw error;
  }
},

updateProject: async (accessToken, projectId, updateData) => {
  try {
    const response = await app.put(`${baseURL}/${projectId}/update`, updateData);
    return response.data;
  } catch (error) {
    throw error;
  }
},

predictSuccessProbability: async (accessToken, projectId) => {
  try {
    const response = await app.get(`${baseURL}/${projectId}/predict`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

}