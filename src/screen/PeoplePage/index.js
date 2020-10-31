import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import PeopleList from '../../components/PeopleList';

function PeoplePage({ navigation }) {

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?nat=br&results=15")
      .then(res => {
        const { results } = res.data
        setPeoples(results)
      })
  }, []);

  return (
    <View>
      <PeopleList peoples={peoples} onPress={pageParams => {
        navigation.navigate('PeopleDetail', pageParams);
      }} />
    </View>
  );
}

export default PeoplePage

