import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Form1 from '../Screens/LingayatSamajSankalan/Form1';
import Form2 from '../Screens/LingayatSamajSankalan/Form2';
import Form3 from '../Screens/LingayatSamajSankalan/Form3';
import Form4 from '../Screens/LingayatSamajSankalan/Form4';

const Stack = createNativeStackNavigator();
const RouteNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Form4">
      {/* -----------------------Splash----------------------------- */}
      <Stack.Screen name="Form1" component={Form1} />
      <Stack.Screen name="Form2" component={Form2} />
      <Stack.Screen name="Form3" component={Form3} />
      <Stack.Screen name="Form4" component={Form4} />
    </Stack.Navigator>
  );
};

export default RouteNavigation;
