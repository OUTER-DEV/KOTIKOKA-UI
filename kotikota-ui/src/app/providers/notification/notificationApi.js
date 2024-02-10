"use client"
import axios from "axios"

const app = axios.create({
    headers:{
      'Content-Type': 'application/json'
    }
  })

  const baseURL = process.env.NEXT_PUBLIC_URL+"/notification"

const NotificationProvider = {
    getNotification : async (userId,accessToken)=>{
      getAllNotification  : async (userId,accessToken)=>{
        const allNotification = await app.post(baseURL+"/"+userId,{
                content : messages
          },{
            headers:
            "Authorization :  Bearer "+ accessToken
          })
          return allNotification;
    }
    }
}