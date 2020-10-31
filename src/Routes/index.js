import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PeoplePage from '../screen/PeoplePage';
import PeopleDetail from '../screen/PeopleDetail';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
 return (
  <NavigationContainer>
   <Navigator
    screenOptions={{

     headerStyle: {
      backgroundColor: '#2BC0E4',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
      alignSelf: 'center',
      fontSize: 30
     },
     headerTintColor: 'white',
    }}>

    <Screen name="PeoplePage"
     component={PeoplePage}
     options={{
      title: 'Pessoas',
     }}
    />
    
    <Screen
     name="PeopleDetail"
     component={PeopleDetail}
     options={({ route }) => {
      return {
        headerTitle: `${route.params.people.name.first} ${route.params.people.name.last}`,
        headerTitleStyle: {
         fontSize: 30
        },
      };
    }} />

   </Navigator>
  </NavigationContainer>
 );
}

export default Routes;