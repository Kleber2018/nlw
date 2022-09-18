import * as Notifications from 'expo-notifications'

export async function getPushNotificationToken(){
     const { granted } = await Notifications.getPermissionsAsync(); //SABER SE O USUÁRIO AUTORIZOU AS NOTIFICAÇÕES

     if(!granted){ //se o dispositivo não tem permissão, solicitar
          await Notifications.requestPermissionsAsync();
     }

     if(granted) {
          const pushToken = await Notifications.getExpoPushTokenAsync();
          console.log('Notification token: ', pushToken.data)
          return pushToken.data
     }
}