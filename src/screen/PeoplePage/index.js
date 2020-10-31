import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

import PeopleList from '../../components/PeopleList';
import styles from './styles';

function PeoplePage({ navigation }) {

  const [peoples, setPeoples] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://randomuser.me/api/?nat=br&results=25")
        .then(res => {
          const { results } = res.data
          setPeoples(results);
          setLoading(false);
        }).catch(error => {
          setError(true);
          setLoading(false);
        })
    }, 1500)
  }, []);

  return (
    <View style={styles.container}>
      {
        loading ?
          <ActivityIndicator size='large' color='#2BC0E4' />
          :
          error ? <Text style={styles.error}>Ops! Algo de errado aconteceu.</Text>
            :
            <PeopleList peoples={peoples} onPress={pageParams => {
              navigation.navigate('PeopleDetail', pageParams);
            }} />
      }

    </View>
  );
}

export default PeoplePage

