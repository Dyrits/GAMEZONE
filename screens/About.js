import { View, Text } from "react-native";

import { global } from "../styles";

export default function About() {
  return (
    <View style={global.container}>
      <Text style={global.title}>About</Text>
    </View>
  );
}