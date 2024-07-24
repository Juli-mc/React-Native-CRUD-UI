import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import LoaderCard from "../components/LoaderCard";

const IsLoadingScreen = () => {
  //Only visual unique screen. Without tabs.
  return (
    <View style={styles.container}>
      <View>
        <Image
          resizeMode="center"
          source={require("../assets/backgroundCardUser.jpg")}
          blurRadius={11}
        />
      </View>
      <View style={styles.containerAlt}>
        <LoaderCard />
      </View>
    </View>
  );
};

export default IsLoadingScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  containerAlt: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
