import React from "react";
import { View, Text, Image, StyleSheet , TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";

const FavCard = (props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      <Image
        source={{
          uri: props.poster,
        }}
        style={styles.image}
      />
      <Text style={styles.movieName}>{props.title}</Text>
      <View style={{flexDirection:'row',justifyContent:'center',margin:5}}>{props.genres.map((i) =><Text style={styles.genre} key={i}>{i}</Text> )}</View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: '48%',
    height: 290,
    elevation: 8,
    borderRadius: 8,
    margin: 5,

  },
  image: {
    width: 140,
    height: 200,
    alignSelf: "center",
  },
  movieName: {
    marginTop: 5,
    fontSize: 14,
    alignSelf: "center",
    textAlign:'center',
    color: "black",
    fontWeight: "bold",
  },
  genre:{
    padding:4,
    fontSize:10,
    fontWeight:'bold',
    borderWidth:2,
    borderColor:'black',
    borderRadius:15,
    textAlign:'center',
    marginRight:3,
    marginBottom:8,
    marginTop:5
  },
});

export default FavCard;
