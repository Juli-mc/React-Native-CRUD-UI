import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const AddUserHeader = () => {
  //Only visual component
  const user = {
    coverPhoto: "https://cdn-icons-png.flaticon.com/512/9356/9356928.png",
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
    </View>
  );
};

export default AddUserHeader;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    alignItems: "center",
  },
  coverPhoto: {
    width: "30%",
    height: 140,
    // resizeMode: "cover",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: -75,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "white",
  },
  name: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "60%",
    justifyContent: "space-between",
  },
});
