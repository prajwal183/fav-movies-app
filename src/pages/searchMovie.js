import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  FlatList,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../constants/Colors";

import Fab from "../components/Fab";
import IconTextbox from "../components/IconTextbox";
import SearchCard from "../components/SearchCard";

const SearchMovie = (props) => {
  const [name, setName] = useState("");
  const movies = useSelector((state) => state.movie.availableList);

  const displayedMovies = movies.filter(
    (movie) => movie.title.toUpperCase().indexOf(name) >= 0
  );
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.primaryColor}
        />
        <IconTextbox
          iconStyleName="calendar"
          iconStyle="card-search"
          inputStyle="Enter movie title"
          style={styles.IconTextbox1}
          value={name}
          onChangeText={(text) => setName(text)}
          autoCapitalize="characters"
        ></IconTextbox>

        <FlatList
          data={displayedMovies}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <SearchCard
              title={itemData.item.title}
              onPress={() => {
                props.navigation.navigate({
                    routeName: "homepageDetails",
                    params: {
                      id: itemData.item.id,
                      title: itemData.item.title,
                    },
                  });
              }}
            />
          )}
        />
        <Fab
          iconName="share-variant"
          icon="keyboard-backspace"
          style={styles.fab}
          onPress={() => props.navigation.goBack()}
        ></Fab>
      </View>
    </TouchableWithoutFeedback>
  );
};

SearchMovie.navigationOptions = (navData) => {
  return {
    headerMode: "none",
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  IconTextbox1: {
    height: 57,
    width: "80%",
    margin: "5%",
  },

  fab: {
    position: "absolute",
    height: 56,
    width: 56,
    backgroundColor: Colors.secondaryColor,
    elevation: 8,
    right: 20,
    bottom: 20,
  },
 
});

export default SearchMovie;
