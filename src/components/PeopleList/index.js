import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const PeopleList = (props) => {
 const { peoples, onPress } = props;
 return (
  <FlatList
   tyle={styles.container}
   data={peoples}
   renderItem={({ item }) => (
    <TouchableOpacity key={item.login.uuid} onPress={() => onPress({ item })}>
     <View style={styles.line} onPress={onPress}>
      <Image style={styles.avatar} source={{ uri: item.picture.thumbnail }} />
      <Text style={styles.lineText}>
       {`${item.name.first} ${item.name.last}`}
      </Text>
     </View>
    </TouchableOpacity>
   )}
   keyExtractor={item => item.login.uuid}
  />
 );
}

export default PeopleList;