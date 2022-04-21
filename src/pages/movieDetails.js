import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { movieActions } from "../redux/reducers";

const movieDetails = (props) => {
  const dispatch = useDispatch();
  const id = props.navigation.getParam("id");
  const movie = useSelector((state) =>
    state.movie.availableList.find((movie) => movie.id === id)
  );

  const [refresh, setRefresh] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.primaryColor}
        />
      <View style={styles.category}>
        <Text style={styles.categorytext}>{movie.classification}</Text>
      </View>
      <Image
        source={{
          uri: movie.backdrop,
        }}
        style={styles.image}
      />
      <ScrollView
        style={styles.detailsSection}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.imdb}>IMDb - {movie.imdb_rating} ★</Text>
        <Text style={styles.label}>Cast :</Text>
        <Text style={styles.detail}>{movie.cast.map((i) => i + ", ")}</Text>
        <Text style={styles.label}>Director :</Text>
        <Text style={styles.detail}>{movie.director}</Text>
        <Text style={styles.label}>Genres :</Text>
        <View style={{ flexDirection: "row" }}>
          {movie.genres.map((i) => (
            <Text style={styles.genre} key={i}>
              {i}
            </Text>
          ))}
        </View>
        <Text style={styles.label}>Length :</Text>
        <Text style={styles.detail}>{movie.length}</Text>
        <Text style={styles.label}>Released on :</Text>
        <Text style={styles.detail}>
          {new Date(movie.released_on).getDate() +
            "-" +
            new Date(movie.released_on).getMonth() +
            1 +
            "-" +
            new Date(movie.released_on).getFullYear()}
        </Text>
        <Text style={styles.label}>Overview :</Text>
        <Text style={styles.detail}>{movie.overview}</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.heart}
        onPress={() => {
          dispatch(movieActions.toggleFavourite({ id: id }));
          setRefresh(!refresh)
        }}
      >
        <FontAwesome
          name="heart"
          size={24}
          color={movie.isLiked ? "#f40d30" : "grey"}
        />
      </TouchableOpacity>
    </View>
  );
};

movieDetails.navigationOptions = (navData) => {
  const title = navData.navigation.getParam("title");
  return {
    headerTitle: title,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      elevation: 0,
    },
    headerTitleStyle: {
      fontWeight: "normal",
      fontSize: 15,
    },
    headerTintColor: Colors.secondaryColor,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsSection: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  category: {
    position: "absolute",
    backgroundColor: "black",
    elevation: 2,
    borderRadius: 23,
    height: 35,
    width: 35,
    right: 10,
    top: 10,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
  },
  categorytext: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
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
  label: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  detail: {
    color: "black",
    fontSize: 13,
    marginBottom: 8,
  },
  genre: {
    padding: 4,
    fontSize: 12,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    textAlign: "center",
    marginRight: 3,
    marginBottom: 8,
    marginTop: 5,
  },
  heart: {
    position: "absolute",
    right: 20,
    bottom: 340,
  },
});

export default movieDetails;
