import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Colors from "../constants/Colors";

import movieDetails from "../pages/movieDetails";
import moviesHomePage from "../pages/moviesHomePage";
import moviesLiked from "../pages/moviesLiked";
import SearchMovie from "../pages/searchMovie";
import ProductScreen from "../pages/filters";

const homePageStackNavigator = createStackNavigator({
  homepage: moviesHomePage,
  homepageDetails: movieDetails,
  search: SearchMovie,
});

const likedPageStackNavigator = createStackNavigator({
  likedpage: moviesLiked,
  likedDetails: movieDetails,
  flyo: ProductScreen,
});

const materialBottomTab = createMaterialBottomTabNavigator(
  {
    homeTab: {
      screen: homePageStackNavigator,
      navigationOptions: {
        tabBarLabel: "Movies",
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome name="film" size={20} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.primaryColor,
        inactiveColor: "black",
      },
    },
    likedTab: {
      screen: likedPageStackNavigator,
      navigationOptions: {
        tabBarLabel: "Favourites",
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome name="heart" size={20} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.primaryColor,
        inactiveColor: "black",
      },
    },
  },
  {
    activeColor: Colors.secondaryColor,
    shifting: true,
  }
);

export default createAppContainer(materialBottomTab);
