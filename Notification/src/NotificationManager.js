import PushNotification from "react-native-push-notification"

  class NotificationManager {

    definirNavegador(novoNavegador) 
    {
        navegador = novoNavegador
    }

    criarCanal = () => {
        PushNotification.createChannel(
            {
              channelId: "channel-id", // (required)
              channelName: "My channel", // (required)
              channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
              playSound: false, // (optional) default: true
              soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
              vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
          );
    }


      // Configuração orientada pela documentação do React Native Push Notification
      // Essa configuração garante o funcionamento da biblioteca no Android e no iOS
      configurar = () => {
          PushNotification.configure({
              onRegister: function (token) {
                  console.log("[NotificationManager] onRegister token:", token);
                },
              onNotification: function (notification) {
              console.log("[NotificationManager] onNotification:", notification);   
              navegador.navigate("Ofertas" + notification.id)   
              navegador.navigate("Ofertas1" + notification.id)     
              navegador.navigate("Ofertas2" + notification.id)    
              navegador.navigate("Ofertas3" + notification.id)
              navegador.navigate("Ofertas4" + notification.id)  
              navegador.navigate("Ofertas5" + notification.id)  
              },
          })
      }

      // É aqui que nossa notificação para o Android é construida
      criarNotificacao = (id, title, message, data = {}, options = {}) => {
          return {
              id: id,
              autoCancel: true,
              channelId: "channel-id",
              largeIcon: options.largeIcon || "ic_launcher",
              smallIcon: options.smallIcon || "ic_launcher",
              bigText: message || '',
              subText: title || '',
              vibrate: options.vibrate || false,
              vibration: options.vibration || 300,
              priority: options.priority || "high",
              importance: options.importance || "high",
              data: data,
              actions: ["Sim", "Não"],
              color: "red",  
          }
      }

      // Fução que exibe a notificação
      exibirNotificacao = (id, title, message, data = {}, options = {}) => {
          PushNotification.localNotification({
              /* Propriedades do Android */
              ...this.criarNotificacao(id, title, message, data, options),

              /* Propriedades do Android e iOS */
              title: title || "",
              message: message || "",
              playSound: options.playSound || false,
              soundName: options.soundName || 'default',
              userInteraction: false
          })
      }

      // Função que cancela todas notiificações e limpa as que estão no centro de notificações
      cancelar = () => {
          PushNotification.cancelAllLocalNotifications();
      }

      agendarNotificacao() {

        PushNotification.localNotificationSchedule({
            id: 3,
            channelId: "channel-id",
            repeatTime: 5 * 1000,
            //... You can use all the options from localNotifications

            title:"Hambúrguer e batata frita por R$ 9,90?",
            message: "Não é loucura, é promoção, vem!", // (required)
            date: new Date(Date.now() + 5 * 1000), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false                   
        });

        PushNotification.localNotificationSchedule({
            id: 4,
            channelId: "channel-id",
            repeatTime: 10 * 1000,
            //... You can use all the options from localNotifications

            title:"Minha bola de cristal mostra...",
            message: "Você pedirá um lanche bem saboroso, cuida!", // (required)
            date: new Date(Date.now() + 10 * 1000), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false                   
        });

        PushNotification.localNotificationSchedule({
            id: 5,
            channelId: "channel-id",
            repeatTime: 15 * 1000,
            //... You can use all the options from localNotifications

            title:"O mestre dos cupons chegou!",
            message: "Confere o que ele trouxe de bom pra você...", // (required)
            date: new Date(Date.now() + 15 * 1000), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false                   
        });
    }
}
  export const notificationManager = new NotificationManager();