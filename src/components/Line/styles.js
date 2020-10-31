import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 line: {
  flexDirection: 'row',
  paddingTop: 3,
  paddingBottom: 3,
  borderWidth: 1,
  borderColor: "#bbb"
 },

 cell: {
  fontSize: 18,
  paddingLeft: 5,
 
 },

 label:{
  fontWeight: 'bold',
  flex: 1,
 },

 content:{
  flex: 3
 },

 longLabel:{
  fontSize: 12,
 }

})

export default styles;