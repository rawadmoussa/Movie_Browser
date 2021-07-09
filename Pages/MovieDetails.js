import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView, KeyboardAvoidingView, Image, FlatList, Button, SafeAreaView, TouchableOpacity, SectionList, TextInput} from 'react-native';

const movieURL = "http://www.omdbapi.com/?apikey=2fe73dac&i="


const MovieDetails = props => {

    const {route} = props;
    const {imdbID} = route.params;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

      fetch(movieURL + imdbID)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() =>
      setLoading(false),
    );

    });

    return (



          <View style={styles.resultRow}>
            <View style={styles.imageDetails}>
              <Image style={styles.image} source={{uri: data.Poster}}/>
              </View>
                { data.Type === 'movie' ? (  <ScrollView style={styles.details}>
                  <Text style={styles.info}> Title: {data.Title}</Text>
                  <Text style={styles.info}> Year: {data.Year}</Text>
                  <Text style={styles.info}> Rated: {data.Rated}</Text>
                  <Text style={styles.info}> Released: {data.Released}</Text>
                  <Text style={styles.info}> Runtime: {data.Runtime}</Text>
                  <Text style={styles.info}> Genre: {data.Genre}</Text>
                  <Text style={styles.info}> Director: {data.Director}</Text>
                  <Text style={styles.info}> Writer: {data.Writer}</Text>
                  <Text style={styles.info}> Actors: {data.Actors}</Text>
                  <Text style={styles.info}> Plot: {data.Plot}</Text>
                  <Text style={styles.info}> Language: {data.Language}</Text>
                  <Text style={styles.info}> Country: {data.Country}</Text>
                  <Text style={styles.info}> Awards: {data.Awards}</Text>
                  <Text style={styles.info}> Meta Score: {data.Metascore}</Text>
                  <Text style={styles.info}> IMDB Rating: {data.imdbRating}</Text>
                  <Text style={styles.info}> iMDB Votes: {data.imdbVotes}</Text>
                  <Text style={styles.info}> Type: {data.Type}</Text>
                  <Text style={styles.info}> DVD: {data.DVD}</Text>
                  <Text style={styles.info}> Box Office: {data.BoxOffice}</Text>
                  <Text style={styles.info}> Production: {data.Production}</Text>

                  </ScrollView>) : (  <ScrollView style={styles.details}>
                    <Text style={styles.info}> Title: {data.Title}</Text>
                    <Text style={styles.info}> Year: {data.Year}</Text>
                    <Text style={styles.info}> Rated: {data.Rated}</Text>
                    <Text style={styles.info}> Released: {data.Released}</Text>
                    <Text style={styles.info}> Runtime: {data.Runtime}</Text>
                    <Text style={styles.info}> Genre: {data.Genre}</Text>
                    <Text style={styles.info}> Director: {data.Director}</Text>
                    <Text style={styles.info}> Writer: {data.Writer}</Text>
                    <Text style={styles.info}> Actors: {data.Actors}</Text>
                    <Text style={styles.info}> Plot: {data.Plot}</Text>
                    <Text style={styles.info}> Language: {data.Language}</Text>
                    <Text style={styles.info}> Country: {data.Country}</Text>
                    <Text style={styles.info}> Awards: {data.Awards}</Text>
                    <Text style={styles.info}> Meta Score: {data.Metascore}</Text>
                    <Text style={styles.info}> IMDB Rating: {data.imdbRating}</Text>
                    <Text style={styles.info}> iMDB Votes: {data.imdbVotes}</Text>
                    <Text style={styles.info}> Type: {data.Type}</Text>
                    <Text style={styles.info}> Total Seasons: {data.totalSeasons}</Text>

                    </ScrollView>)}

              </View>



    );
};
const styles = StyleSheet.create({

  details:{

    backgroundColor: '#222',
    flex: 1,

  },
  image: {
        height: "100%",
        width: '100%',


    },
  info:{
    fontSize: 20,
    color: "#fff",
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    borderColor: "gray",
    padding: 10


  },
  imageDetails:{

    height: '60%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 0.5,

  },
  resultRow:{
    backgroundColor: '#000',
    flexDirection: 'row',
    flex: 1,


  },


});

export default MovieDetails;
