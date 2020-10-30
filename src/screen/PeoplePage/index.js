import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import PeopleList from '../../components/PeopleList';
import Header from '../../components/Header'

function PeoplePage() {

 const [peoples, setPeoples] = useState([]);

 useEffect(() => {
  axios
   .get("https://randomuser.me/api/?nat=br&results=5")
   .then(res => {
    const { results } = res.data
    setPeoples(results)
   })
 }, []);

 return (
  <View>
   <Header title="People" />
   <PeopleList peoples={peoples} />
  </View>
 );
}

export default PeoplePage

