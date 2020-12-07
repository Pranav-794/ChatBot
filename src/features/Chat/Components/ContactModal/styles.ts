import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContent: {
    margin: 20,
    backgroundColor: '#EBF4F6',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
  },
  description: {
    marginBottom: 15,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#4F92FD',
    borderRadius: 12,
    padding: 10,
    elevation: 2,
  },
  backText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
