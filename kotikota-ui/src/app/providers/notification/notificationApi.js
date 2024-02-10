"use client"
import axios from "axios"

const app = axios.create({
    headers:{
      'Content-Type': 'application/json'
    }
  })

  const baseURL = process.env.NEXT_PUBLIC_URL+"/notification"

export  const NotificationProvider = {
  getNotification: async (userId) => {
    return app.get(baseURL+"/"+userId,{
     
    }).then((user)=>{
      return user;
    }).catch((e)=>{
      throw e;
    })
  }
    }
