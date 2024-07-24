import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ListUsersCustom from "../components/ListUsersCustom";
import ListItemCustom from "../components/ListItemCustom";

const Home = () => {
  //Switch the comment line, in between components to shows another option to main user list.
  return (
    <View style={styles.container}>
      {/* <ListItemCustom /> */}
      <ListUsersCustom />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#Ffff",
    borderRadius: 26,
  },
});
