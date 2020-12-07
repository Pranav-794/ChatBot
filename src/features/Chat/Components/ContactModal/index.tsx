import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';

interface Props {
  visible: boolean;
  onBack: () => void;
}

export class ContactModal extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.renderBackButton = this.renderBackButton.bind(this);
  }

  renderDescription() {
    return (
      <Text style={styles.description}>
        Looks like you're having trouble, please call our agent directly at this
        number: 1-800-....
      </Text>
    );
  }

  renderBackButton() {
    const {onBack} = this.props;
    return (
      <View>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const {visible} = this.props;
    return (
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.container}>
          <View style={styles.modalContent}>
            {this.renderDescription()}
            {this.renderBackButton()}
          </View>
        </View>
      </Modal>
    );
  }
}

export default ContactModal;
