import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const SearchCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 0,
    shadowColor: "white",
    width: "90%",
    alignSelf: "center",
    borderBottomWidth: 0.5,
    height: 30,
    margin:3
  },
  title: {
    fontSize: 13,
    color: "black",
    marginLeft: 10,
    fontWeight:'bold'
  },
});

export default SearchCard;
