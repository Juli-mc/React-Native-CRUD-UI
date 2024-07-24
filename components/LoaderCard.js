import { StyleSheet, Text, View } from "react-native";
import { Button, Card, H2, Image, Paragraph, Spinner, XStack } from "tamagui";
import React from "react";

const LoaderCard = (props) => {
  //Only visual component
  return (
    <Card elevate size="$6" bordered themeInverse={true} padded>
      <Card.Header>
        <Spinner size="large" color="#0078ff" scale={1.2} />
      </Card.Header>
    </Card>
  );
};

export default LoaderCard;

const styles = StyleSheet.create({});
