import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: "Nunito-Bold",
    fontSize: 18
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    textAlign: "justify"
  }
});
