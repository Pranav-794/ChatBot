import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

export class App extends PureComponent {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>Welcome to Cerebral Care!</Text>
            <TouchableOpacity style={styles.chatButton}>
              <Text>Click Here to Chat</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
