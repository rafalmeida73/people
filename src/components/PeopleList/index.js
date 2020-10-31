import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const PeopleList = (props) => {
 const { peoples, onPress } = props;
 return (
  <View style={styles.container}>
   {peoples.map(people => {
    return (
     <TouchableOpacity onPress={() => onPress({people})}>
      <View key={people.login.uuid} style={styles.line} onPress={onPress}>
       <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
       <Text style={styles.lineText}>
        {`${people.name.first} ${people.name.last}`}
       </Text>
      </View>
     </TouchableOpacity>
    )
   })}
  </View>
 );
}

export default PeopleList;