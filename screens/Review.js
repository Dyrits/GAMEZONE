import { StyleSheet, View, Text } from "react-native";

export default function Review() {
  return (
    <View style={styles.container}>
      <Text>Review Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  }
});
