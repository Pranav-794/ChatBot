import React, {PureComponent} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {openChatBot} from '../../../../Libs/Navigation';
import styles from './styles';
import RNImg from '../../../../../assets/Images/rn.png';

interface Props {
  componentId: string;
}

export class Welcome extends PureComponent<Props> {
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
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image style={styles.image} source={RNImg} />
          <Text style={styles.title}>Welcome to Cerebral Care!</Text>
          <TouchableOpacity onPress={this.openChat} style={styles.chatButton}>
            <Text style={styles.textColor}>Click Here to Chat</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Welcome;
