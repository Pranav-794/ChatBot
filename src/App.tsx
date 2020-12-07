import {Navigation} from 'react-native-navigation';
import {setupAxios} from './configs/axios';
import ConfigNavigation from './configs/navigation';
import {openWelcome} from './Libs/Navigation';

function startApp() {
  Navigation.events().registerAppLaunchedListener(async () => {
    console.log('startingApp.');
    setupAxios();
    ConfigNavigation();
    openWelcome();
  });
}

export default startApp;
