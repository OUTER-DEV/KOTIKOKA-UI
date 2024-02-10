
import React from 'react';
import { authProvider } from '../../providers/login/loginAPI';
import { NotificationProvider } from '../../providers/notification/notificationApi';

const NotificationBanner = ({ notifications }) => {
  return (
       <>
    {
        JSON.stringify(notifications)
    }
    </>
  );
  
};

export default NotificationBanner;

let GetNotification = ()=>{
  NotificationProvider.getNotification()
  return(
    <></>
  )
}