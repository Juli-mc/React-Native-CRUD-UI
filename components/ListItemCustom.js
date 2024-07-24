import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  ChevronRight,
  ChevronRightCircle,
  ChevronRightSquare,
  Cloud,
  Moon,
  Star,
  Sun,
} from "@tamagui/lucide-icons";
import { ListItem, ScrollView, Separator, XStack, YGroup } from "tamagui";

import AvatarCustom from "./AvatarCustom";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import UserProfile from "../screens/UserProfile";
import CreateUser from "../screens/CreateUser";
import { RefreshControl } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../store/slices/isLoading.slice";

const ListItemCustom = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const navigation = useNavigation();
  const [userss, setUserss] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });
  //Function for main refresh.

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user?page=1&limit=6", {
        headers: {
          "app-id": "63473330c1927d386ca6a3a5",
        },
      })
      .then((res) => setUserss(res.data.data));
  }, [refreshing]);
  //Function for refresh the list user. When "refreshing" switched his state the useEffect does another petition to shows last changes in the main user list.

  const onPressUser = (users) => {
    dispatch(setIsLoading(true)),
      navigation.navigate("UserProfile", { id: users });
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 2000);
  };
  //Function for navigate to the user profile page. When the user press in the "Edit info" buttom takes us to that id user's form to update their information. The global state "isLoading" is a switcher for shows the loading screen.
  //When "isLoading" are false, shows the loading screen, when are true the screen will be removed.
  //For understand the isLoading function, check screen "Home".

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      styles={styles.scrollContainer}
    >
      <YGroup
        alignSelf="center"
        // width={340}
        size="$6"
        separator={<Separator />}
        borderRadius={26}
      >
        {userss.map((item) => (
          <YGroup.Item key={item.id}>
            <ListItem
              key={item.id}
              hoverTheme
              pressTheme
              title={item.title + " " + item.firstName + " " + item.lastName}
              subTitle={"ID: " + item.id}
              icon={<AvatarCustom item={item} />}
              iconAfter={<ChevronRightCircle size="$2" />}
              themeInverse={true}
              onPress={() => onPressUser(item)}
              padded
            />
          </YGroup.Item>
        ))}
      </YGroup>
    </ScrollView>
  );
};

export default ListItemCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: "100%",
    // flex: 1,
    backgroundColor: "#ffff",
  },
});
