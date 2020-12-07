import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EBF4F6',
    paddingBottom: 50,
    flexDirection: 'row',
  },
  textInput: {
    alignSelf: 'center',
    marginTop: 12,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 0.19,
    borderColor: '#000000',
    fontSize: 16,
    width: '70%',
    marginLeft: '5%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  sendButton: {
    alignSelf: 'center',
    backgroundColor: '#4F92FD',
    paddingHorizontal: 20,
    height: 50,
    marginTop: 12,
    shadowColor: '#000000',
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginLeft: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  sendImage: {
    tintColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
  },
});
