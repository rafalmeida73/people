import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

import Line from '../../components/Line'

const PeopleDetail = (props) => {
  const { people } = props.route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: people.picture.large }} />
      <View style={styles.detailContainer}>
        <Line label="Email" content={people.email} />
        <Line label="Cidade" content={`${people.location.city}, ${people.location.state}`} />
        <Line label="Tel" content={people.phone} />
        <Line label="Cel" content={people.cell} />
        <Line label="Nacionalidade" content={people.nat} />
      </View>
    </View>
  );
}

export default PeopleDetail;