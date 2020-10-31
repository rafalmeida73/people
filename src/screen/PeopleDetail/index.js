import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import styles from './styles';

import Line from '../../components/Line'

const PeopleDetail = (props) => {
  const { item } = props.route.params;
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.avatar} source={{ uri: item.picture.large }} />
      <View style={styles.detailContainer}>
        <Line label="Email" content={item.email} />
        <Line label="Cidade" content={`${item.location.city}, ${item.location.state}`} />
        <Line label="Tel" content={item.phone} />
        <Line label="Cel" content={item.cell} />
        <Line label="Nat:" content={item.nat} />
      </View>
    </ScrollView>
  );
}

export default PeopleDetail;