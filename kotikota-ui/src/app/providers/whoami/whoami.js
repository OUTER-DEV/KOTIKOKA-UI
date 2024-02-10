import { authProvider } from "../login/loginAPI";

export default USER = ()=>{
userInfo = authProvider.whoami;
userId = userInfo.userId;
}
