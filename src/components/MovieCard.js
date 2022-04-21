import React from "react";
import { View, Text, Image, StyleSheet , TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";

const MovieCard = (props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      <Image
        source={{
          uri: props.poster,
        }}
        style={styles.image}
      />
      <Text style={styles.movieName}>{props.title}</Text>
      <Text style={styles.imdb}>IMDb rating - {props.imdb_rating} ★</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: 160,
    height: 260,
    elevation: 8,
    borderRadius: 8,
    margin: 5,
  },
  image: {
    width: 130,
    height: 185,
    alignSelf: "center",
  },
  movieName: {
    marginTop: 5,
    fontSize: 13.5,
    alignSelf: "center",
    textAlign:'center',
    color: "black",
    fontWeight: "bold",
  },
  imdb: {
    marginTop: 5,
    fontSize: 12,
    alignSelf: "center",
    color: "blue",
    fontWeight: "bold",
  },
});

export default MovieCard;
