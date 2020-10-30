import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PeoplePage from '../screen/PeoplePage';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
 return (
  <NavigationContainer>
   <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="PeoplePage" component={PeoplePage} />
   </Navigator>
  </NavigationContainer>
 );
}

export default Routes;