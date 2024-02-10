import { authProvider } from "../login/loginAPI";

export default USER = ()=>{
userInfo = authProvider.whoami;
userId = userInfo.userId;
}

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