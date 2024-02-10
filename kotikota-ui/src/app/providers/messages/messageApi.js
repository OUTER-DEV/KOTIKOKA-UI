"use client"
import axios from "axios"

const app = axios.create({
    headers:{
      'Content-Type': 'application/json'
    }
  })

const baseURL = process.env.NEXT_PUBLIC_URL+"/messages"

export const  MessageProvider = {
    sendMesssage  : async (messages,username,receiverName,accessToken)=>{
        const newMessage = await app.post(baseURL+"/send?senderUsername="+username+"&receiverUsername="+receiverName,{
                content : messages
          },{
            headers:
            "Authorization :  Bearer "+ accessToken
          })
          return newMessage;
    },
    MyChat: async (userId)=>{
        const MyChat = await app.get(baseURL+"/"+userId,{
            headers:
            "Authorization :  Bearer "+ accessToken
          })
        return MyChat;
    }
}