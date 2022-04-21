import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import MovieCard from "./MovieCard";
import Colors from "../constants/Colors";

const MovieSection = (props) => {
  return (
    <View style={styles.section}>
      <View style={styles.classificationHeader}>
        <Text style={styles.classificationHeaderText}>{props.category}</Text>
      </View>

      <FlatList
        data={props.movies}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={(itemData) => (
          <MovieCard
            poster={itemData.item.poster}
            title={itemData.item.title}
            imdb_rating={itemData.item.imdb_rating}
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
    </View>
  );
};

const styles = StyleSheet.create({
  classificationHeader: {
    borderBottomColor: Colors.secondaryColor,
    borderBottomWidth: 4,
    width: 60,
    marginLeft: 5,
    marginBottom: 8,
    paddingBottom: 5,
  },
  classificationHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.secondaryColor,
  },
  section:{
    marginBottom:5
  }
});

export default MovieSection;
