import {Navigation} from 'react-native-navigation';
import Screen from '../Libs/Navigation/screens';
import Welcome from '../features/Onboarding/screens/Welcome';
import ChatBot from '../features/Chat/screens/Chatbot';

export default () => {
  Navigation.registerComponent(Screen.Welcome, () => Welcome);
  Navigation.registerComponent(Screen.ChatBot, () => ChatBot);
  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: '#FAFAFA',
    },
    statusBar: {
      drawBehind: true,
      visible: false,
    },
    topBar: {
      visible: false,
    },
    animations: {
      push: {
        waitForRender: true,
      },
      showModal: {
        waitForRender: true,
      },
    },
  });
};
