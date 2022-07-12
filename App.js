// React native
import React from 'react';
import type {Node} from 'react';

// Pages
import Home from './src/components/pages/Home';
import Profile from './src/components/pages/Profile';
import PublishJourney from './src/components/pages/PublishJourney';

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
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="PublishJourney" component={PublishJourney} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
