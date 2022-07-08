// React native
import React from 'react';
import type {Node} from 'react';

// Pages
import Home from './src/components/pages/Home';

// Utils 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const App = () => {
  const Stack = createNativeStackNavigator();
  
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home" 
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
