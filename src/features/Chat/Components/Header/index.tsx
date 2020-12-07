import React from 'react';
import {Image, Text, View} from 'react-native';
import person from '../../../../../assets/Images/woman.png';
import styles from './styles';

interface Props {
  title: string;
}

function Header(props: Props): React.ReactElement {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Image source={person} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Header;
