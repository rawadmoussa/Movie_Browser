import React from 'react';
import { StyleSheet, TouchableOpacity,ImageBackground, Button, Image, Text, View } from 'react-native';
import { Asset, useAssets } from 'expo-asset';


const Home = props => {
    return (

      <View style={styles.container}>
      <ImageBackground source={require( '../assets/movie-background.jpg')} style={styles.backgroundImage} imageStyle=
{{opacity:0.2}}>

      <Text style={styles.title}>Movie Browser</Text>
      <Text style={styles.text}>Browse and watch movies and TV shows!</Text>

        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Search')} >
        <Text style={styles.buttonText}>BROWSE</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'


  },
  logo: {

        width: 160,
        height: 160,
        margin: 20,
        padding: 30
    },
    text: {

      color: 'gray',
      fontSize: 20,
      padding: 30
      },
    button: {
      padding: 10,
     borderColor: '#fff',
     color: 'white',
     backgroundColor: 'blue',
     borderWidth: 2

    },
    backgroundImage:{
       flex: 1,
       width: '100%',
       height: '100%',
       justifyContent: "center",
       alignItems: "center",
   },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70,
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center'


  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});

export default Home;
