import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { global } from "../styles";

import games from "../data/games";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState(games);

  return (
    <View style={global.container}>
      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {
          navigation.navigate("Review", item);
        }}>
          <Text style={global.title}>{item.title}</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
}