import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import HeaderUserCard from "../components/HeaderUserCard";
import DataUserCard from "../components/DataUserCard";
import { useDispatch, useSelector } from "react-redux";
import IsLoadingScreen from "./IsLoadingScreen";
import { setIsLoading } from "../store/slices/isLoading.slice";
import axios from "axios";
import { ScrollView } from "tamagui";

const UserProfile = ({ navigation, route }) => {
  const { id } = route.params;
  const isLoading = useSelector((state) => state.isLoading);

  return (
    //isLoading is a global state as like switch. When you click in any user of ListItemCustom his function does navigate to UserProfile after .map
    //When isLoading are true, the loading screen are showing. Remember we are renderized all components previously, so when your into to any UserProfile, the loader screen
    //turn off and shows the data just time.
    //The bug, shows "undefined" in the form screen user at the first seconds. Fixed with "isLoadingScreen".
    <View style={{ flex: 1, justifyContent: "center" }}>
      {isLoading ? <IsLoadingScreen /> : null}
      <ScrollView>
        <HeaderUserCard picture={id.picture} />
        <DataUserCard dataUser={id} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserProfile;
