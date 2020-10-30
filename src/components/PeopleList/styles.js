import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
 container: {
  backgroundColor: "#e2f9ff",
 },

 line: {
  height: 60,
  borderBottomWidth: 1,
  borderBottomColor: "#bbb",

  alignItems: 'center',
  flexDirection: 'row',
 },

 lineText: {
  fontSize: 20,
  flex: 7
 },

 avatar: {
  aspectRatio: 1,
  flex: 1,
  borderRadius: 50,
  marginLeft: 15,
 }
});

export default styles;