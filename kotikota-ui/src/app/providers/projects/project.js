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
  "ownerId": project.percentageAchieved,
  "category": project.category

})
return newProject;
},

getAll:async (accessToken)=>{
    return app.get(baseURL+"/all?", {
         headers:{
        Authorization:"Bearer "+accessToken
      }
    }).then((data)=>{
        return data.data;
    }).catch((e)=>{
         throw e;
        })
},

seeProject: async (accessToken)=>{
  return app.get(baseURL+"/projectId", {
      headers:{
      Authorization:"Bearer "+accessToken
    }
  }).then((data)=>{
      return data.data;
  }).catch((e)=>{
    throw e;
  })
},

contributeToProject: async (accessToken, projectId, contributionData) => {
  try {
    const response = await app.post(`${baseURL}/${projectId}/contribute`, contributionData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
},

updateProject: async (accessToken, projectId, updateData) => {
  try {
    const response = await app.put(`${baseURL}/${projectId}/update`, updateData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
},

predictSuccessProbability: async (accessToken, projectId) => {
  try {
    const response = await app.get(`${baseURL}/${projectId}/predict`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

}