import React, {useState, useEffect} from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import {Icon} from "react-native-elements";
import {StyleSheet, Text, View, ActivityIndicator, KeyboardAvoidingView, Image, FlatList, Button, SafeAreaView, TouchableOpacity, SectionList, TextInput} from 'react-native';

const movieURL = "http://www.omdbapi.com/?apikey=2fe73dac&s="
const Search = props => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numOfPages, setNumOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchPage, setSearchPage] = useState('');

  const updateQuery = (newQuery) => {

        setQuery(newQuery);
    };



    useEffect(() => {

      fetch(movieURL + query + "&page=" + currentPage)
      .then((response) => response.json())
      .then((json) => { setData(json.Search);
                    setNumOfPages(Math.floor(json.totalResults / 10) + 1)
              }
)
      .catch((error) => console.error(error))
      .finally(() =>
      setLoading(false),

);


});


    return (
      <SafeAreaView style={styles.container}>
      {loading ? (<ActivityIndicator size="large"/>): (
      <KeyboardAvoidingView  behavior={"height"}>
      <View style={styles.searchRow}>
          <Icon style={styles.searchIcon} name="search" size={40} color="#fff"/>
          <TextInput style={styles.textInput} value={query} onChangeText={ (newQuery) => {updateQuery(newQuery); setCurrentPage(1); }} textAlign='center' placeholder="Search for movies and TV shows" />
      </View>
      { !data && query ? (<Text style={styles.noResults}> No Results </Text>) : (
        <View style = {styles.flex}>
      <View style={styles.flatList}>
      <FlatList

        data = {data}
        keyExtractor = {item => item.imdbID}
        renderItem = {({ item }) => (
          <TouchableOpacity onPress={() => props.navigation.navigate('MovieDetails', {imdbID: item.imdbID})}>
          <View style={styles.resultRow}>
              <Image style={styles.image} source={{uri: item.Poster}}/>
              <Text style={styles.title}>{item.Title}, {item.Year}</Text>
              </View>
              </TouchableOpacity>
            )}/>
      </View>
        { !data && !query ? (null) : (
      <View>
      {currentPage > 1 && currentPage < numOfPages ? (<View style={styles.buttons}>
            <Button  title='Previous' onPress={() => {setCurrentPage( currentPage - 1);
        }}/>
        <Button title='Next' onPress={() => setCurrentPage( currentPage + 1)
      }/>
       </View>) :
        (
          <View>
          { currentPage === 1 ? (<View style={styles.buttons}><Button title='Next' onPress={() => setCurrentPage( currentPage + 1)    }/></View>) :
           (<View style={styles.buttons}><Button title='Previous' onPress={() => setCurrentPage( currentPage - 1)    }/></View>)}

           </View>)}

      </View>
    )}

    </View>

)}

      </KeyboardAvoidingView>
    )}
      </SafeAreaView>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {

    backgroundColor: 'white',
        width: responsiveWidth(60),
        borderBottomWidth : 1.0,
        borderColor: 'gray',
        height: responsiveHeight(6),
        padding: 10,
        fontSize: 14,


  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: 100,
    marginBottom: 30,



  },
  searchIcon: {
    padding: 10,
},
listItem:{
  color: "#222",
  backgroundColor: 'gray',
},

  image: {
        height: 100,
        width: 100,

    },
  title:{
    fontSize: 20,
    color: "#fff",
    marginLeft: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

  },
  resultRow:{
    backgroundColor: '#333',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "gray",
    alignContent:"center",
    flex: 1,


  },
  flatList:{
    flex: 1,
  },
  noResults:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',

  },
  flex:{
    flex: 1
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 25,

  }

});

export default Search;
