import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BooksScreen from './src/screens/BooksScreen';
import BooksDetailsScreen from './src/screens/BooksDetailsScreen';
import TEST from './src/screens/TEST';
import FavoritesScreens from './src/screens/FavoritesScreens';
import UserProfile from './src/screens/UserProfile';
import {FavoritesProvider} from './src/context/FavoritesContext';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen name=" LoginScreen " component={LoginScreen} />
          <Stack.Screen name="BooksScreen" component={BooksScreen} />
          <Stack.Screen
            name="BooksDetailsScreen"
            component={BooksDetailsScreen}
          />
          <Stack.Screen name="FavoritesScreens" component={FavoritesScreens} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
