import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
  marginTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight,
  backgroundColor: '#2BC0E4',
 },

 text: {
  color: '#fff',
  fontSize: 50,
  textAlign: 'center'
 }
});

export default styles;