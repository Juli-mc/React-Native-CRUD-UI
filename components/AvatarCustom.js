import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "tamagui";

const AvatarCustom = (props) => {
  return (
    <Avatar circular size="$8">
      <Avatar.Image src={props.item.picture} />
      <Avatar.Fallback bc="lightgray" />
    </Avatar>
  );
};

export default AvatarCustom;
