import { View, Text, Button } from "react-native";

import { global } from "../styles";

export default function Review({ navigation, route }) {
  const { title, description } = route.params;
  return (
    <View style={global.container}>
      <Text style={global.title}>{title}</Text>
      <Text style={global.paragraph}>{description}</Text>
    </View>
  );
}
