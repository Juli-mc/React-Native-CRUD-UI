import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "tamagui";

const HeaderUserCard = (props) => {
  const user = {
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
    coverPhoto:
      "https://media.istockphoto.com/id/1409540606/es/vector/vector-de-entrarnos-en-contacto-con-patr%C3%B3n-entrarnos-en-contacto-con-fondo-transparente.jpg?s=612x612&w=0&k=20&c=5zg7sKC_9MfdudJVkhUCwwWuNOG6d22Sa5_vLeuxRoY=",
    name: "John Smith",
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
      <View style={styles.avatarContainer}>
        <Avatar circular size="$12" style={styles.avatar}>
          <Avatar.Image src={props.picture} />
          <Avatar.Fallback bc="lightgray" />
        </Avatar>
      </View>
    </View>
  );
};

export default HeaderUserCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  coverPhoto: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
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
