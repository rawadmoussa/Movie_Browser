import * as React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Home';
import Search from './Pages/Search';
import MovieDetails from './Pages/MovieDetails';

const MovieBrowserStack = () => {
  return (<Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#444',
          borderBottomWidth: 0,

        },
        headerTintColor: '#fff',


      }}>

        <Stack.Screen name="Home" component={Home} options={{
          title: 'Welcome!',
          headerShown: false,

        }} />
        <Stack.Screen name="Search" component={Search} options={{
          title: 'Search',
          headerShown: true,
        }} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{
          title: 'Movie Details',
          headerShown: true,
        }} />

  </Stack.Navigator>);
};



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.container}>

      <MovieBrowserStack />

    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
});
export default App;
