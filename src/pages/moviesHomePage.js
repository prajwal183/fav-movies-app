import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  StatusBar,
  Modal,
  TouchableHighlight,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actionCreators";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MovieSection from "../components/MovieSection";
import HeaderButton from "../components/HeaderButton";
import Fab from "../components/Fab";
import Slider from "@react-native-community/slider";

const moviesHomePage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchedmovies = useSelector((state) => state.movie.availableList);

  const [modalVisible, setModalVisible] = useState(false);
  const [imdb, setImdb] = useState(0);
  const [displayImdb, setDisplayImdb] = useState(0);
  const movies = fetchedmovies.filter(item => item.imdb_rating >= imdb);
  
  const loadData = useCallback(async () => {
    try {
      await dispatch(
        fetchMovies("https://wookie.codesubmit.io/movies", "Wookie2019")
      );
    } catch (err) {
      console.log(err);
      alert("could not connect to servers");
    }
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    loadData().then(() => {
      setIsLoading(false);
    });
  }, []);

  const uniqueCategory = [
    ...new Set(movies.map((item) => item.classification)),
  ];

  if (isLoading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color={Colors.secondaryColor} />
        <Text style={styles.loadingText}>Loading Movies..</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.primaryColor}
      />
      <FlatList
        data={uniqueCategory}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={(itemData) => (
          <MovieSection
            category={itemData.item}
            movies={movies.filter(
              (movie) => movie.classification === itemData.item
            )}
            navigation={props.navigation}
          />
        )}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.imdb}>IMDb - {imdb} ★</Text>

            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={imdb}
              onValueChange={(value) => {
                setDisplayImdb(value);
              }}
              onSlidingComplete={(value)=> setImdb(value)}
              minimumTrackTintColor={Colors.secondaryColor}
              maximumTrackTintColor="#000000"
            />
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Fab
        iconName="share-variant"
        icon="filter"
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      ></Fab>
    </View>
  );
};

moviesHomePage.navigationOptions = (navData) => {
  return {
    headerTitle: "Movies",
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      elevation: 0,
    },
    headerTintColor: Colors.secondaryColor,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="search"
          onPress={() => {
            navData.navigation.navigate("search");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
  },
  loadingText: {
    fontSize: 12,
    color: Colors.secondaryColor,
    fontWeight: "bold",
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width:100,
    justifyContent:'center',
    alignItems:'center'
  },
  imdb: {
    backgroundColor: "#f3ce13",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    height: 25,
    width: 90,
    padding: 4,
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    height: 40,
    width: 40,
    backgroundColor: Colors.secondaryColor,
    elevation: 8,
    right: 10,
    bottom: 10,
  },
});

export default moviesHomePage;
