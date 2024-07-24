import { ArrowUp, FileEdit, Info, SquareUser } from "@tamagui/lucide-icons";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button, Paragraph, ScrollView } from "tamagui";
import AvatarCustom from "./AvatarCustom";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../store/slices/isLoading.slice";
import { RefreshControl } from "react-native-gesture-handler";

const ListUsersCustom = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [likePorcent, setLikePorcent] = useState();
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
      .then((res) => setUsers(res.data.data));
  }, [refreshing]);
  //Function for refresh the list user. When "refreshing" switched his state the useEffect does another petition to shows last changes in the main user list.

  const onPressUser = (item) => {
    dispatch(setIsLoading(true)),
      navigation.navigate("UserProfile", { id: item });
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 2000);
  };
  //Function for navigate to the user profile screen. When the user press in the "Edit info" buttom takes us to that id user's form to update their information.
  //When "isLoading" are false, shows the loading screen, when are true the screen will be removed.
  //For understand more about the isLoading function, check screen "Home".

  //renderUser like as a itearion component. It shows each one data user in corresponding card.

  const renderUser = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.card}>
          <AvatarCustom item={item} />
          <View style={styles.info}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <SquareUser size="$2" color="#000" />
              <Text> </Text>
              <Text style={styles.name}>
                {item.title + " " + item.firstName + " " + item.lastName}
              </Text>
            </View>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Info size="$2" color="#000" />
              <Text> </Text>
              <Text style={styles.details}>
                <Paragraph
                  fontSize="$4"
                  theme="alt2"
                  fontWeight="bold"
                  fontStyle="normal"
                >
                  ID:
                </Paragraph>
                {item.id}
              </Text>
            </View>
            <Button
              onPress={() => onPressUser(item)}
              size="$3"
              theme="active"
              backgroundColor="#0078ff"
              color="#ffff"
              icon={<FileEdit size="$2" />}
              fontWeight="bold"
            >
              Edit info
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <FlatList
          data={users}
          renderItem={renderUser}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderWidth: 6,
    borderColor: "#DCDCDC",
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
    elevation: 2,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    width: "100%",
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 13,
    color: "#888",
    marginVertical: 5,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2ECC71",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#2ECC71",
    fontSize: 16,
  },
});

export default ListUsersCustom;
