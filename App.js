// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Constants from './src/Constants';
import MovieDetails from './src/Components/MovieDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Home} options={headerStyle} />
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={movieDetailsStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title: 'Movies',
  headerStyle: { backgroundColor: (Constants.secondaryColor)},
  headerTitleStyle: { color: (Constants.textColor)}
}

const movieDetailsStyle = {
  title: 'Details',
  headerStyle: { backgroundColor: (Constants.secondaryColor)},
  headerTitleStyle: { color: (Constants.textColor)}
}

export default App;