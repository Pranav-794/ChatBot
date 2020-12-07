import {Navigation} from 'react-native-navigation';
import Screen from './screens';

export function openWelcome() {
  const screenName = Screen.Welcome;
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: screenName,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
}

export function openChatBot(componentId: string) {
  const screenName = Screen.ChatBot;
  Navigation.push(componentId, {
    component: {
      name: screenName,
      options: {
        topBar: {
          visible: false,
        },
        statusBar: {
          drawBehind: true,
          visible: false,
        },
      },
    },
  });
}
