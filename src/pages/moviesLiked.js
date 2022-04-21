import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MovieSection from "../components/MovieSection";
import HeaderButton from "../components/HeaderButton";
import FavCard from "../components/FavCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actionCreators";

const moviesLiked = (props) => {
  const movies = useSelector((state) => state.movie.availableList);

  const favMovies = useSelector((state) => state.movie.favouriteList);
  const dispatch = useDispatch()

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
    if (movies.length === 0) {
      setIsLoading(true);
      loadData().then(() => {
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.primaryColor}
        />
      <FlatList
        data={favMovies}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <FavCard
            title={itemData.item.title}
            poster={itemData.item.poster}
            genres={itemData.item.genres}
            onPress={() => {
              props.navigation.navigate({
                routeName: "likedDetails",
                params: {
                  id: itemData.item.id,
                  title: itemData.item.title,
                },
              });
            }}
          />
        )}
      />
    </View>
  );
};

moviesLiked.navigationOptions = (navData) => {
  return {
    headerTitle: "Favourites",
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
            navData.navigation.navigate("");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    padding: 10,
  },
});

export default moviesLiked;
