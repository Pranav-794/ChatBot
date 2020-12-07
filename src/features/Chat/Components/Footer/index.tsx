import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import send from '../../../../../assets/Images/send.png';
import styles from './styles';

interface Props {
  textValue: string;
  onSubmit: () => void;
  onTextChange: (query: string) => void;
}

function Footer(props: Props): React.ReactElement {
  const {textValue, onSubmit, onTextChange} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onSubmitEditing={onSubmit}
        placeholder="Type here..."
        onChangeText={onTextChange}
        underlineColorAndroid="transparent"
        value={textValue}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.sendButton}>
        <Image source={send} style={styles.sendImage} />
      </TouchableOpacity>
    </View>
  );
}

export default Footer;
