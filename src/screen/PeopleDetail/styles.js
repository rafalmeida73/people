import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
  padding: 15,
 },

 avatar: {
  aspectRatio: 1,
 },

 detailContainer: {
  backgroundColor: "#e2f9ff",
  marginTop: 20,
  shadowColor: "#000",
  shadowOffset: {
   width: 0,
   height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
  marginBottom: 30
 },

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

 label: {
  fontWeight: 'bold',
 }

})

export default styles;