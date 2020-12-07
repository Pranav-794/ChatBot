import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {openChatBot} from '../../../../Libs/Navigation';
import styles from './styles';

interface Props {
  componentId: string;
}

export class App extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.openChat = this.openChat.bind(this);
  }

  openChat() {
    const {componentId} = this.props;
    openChatBot(componentId);
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>Welcome to Cerebral Care!</Text>
            <TouchableOpacity onPress={this.openChat} style={styles.chatButton}>
              <Text>Click Here to Chat</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
