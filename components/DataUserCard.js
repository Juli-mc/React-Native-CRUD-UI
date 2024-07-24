import { StyleSheet, Text, View } from "react-native";
import {
  Button,
  Card,
  H1,
  H2,
  H3,
  H4,
  Input,
  Paragraph,
  Separator,
  XStack,
  Spinner,
  YStack,
} from "tamagui";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Toast from "react-native-toast-message";
import {
  CircleUser,
  ImagePlus,
  Phone,
  SaveAll,
  Trash,
} from "@tamagui/lucide-icons";
import { useNavigation } from "@react-navigation/native";
import LoaderCard from "./LoaderCard";

const DataUserCard = (props) => {
  const [modalForm, setModalForm] = useState(false);
  const [firstName, setFirstName] = useState(props.dataUser.firstName);
  const [lastName, setLastName] = useState(props.dataUser.lastName);
  const [picLink, setPicLink] = useState(props.dataUser.picture);
  const [phone, setPhone] = useState("");
  const [dataUser, setDataUser] = useState([]);
  const navigation = useNavigation();
  const data = {
    firstName: firstName,
    lastName: lastName,
    picLink: picLink,
    phone: phone,
  };
  //Format array to api request.

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Success ✅",
      text2: "The personal information has been updated ",
    });
  };

  const showToast2 = () => {
    Toast.show({
      type: "error",
      text1: "Error ⛔",
      text2: "Opps, something is wrong, please try again later",
    });
  };

  const showToast3 = () => {
    Toast.show({
      type: "info",
      text1: "Success 🗑️",
      text2: "The user has been deleted",
    });
  };
  //Toast alert in the screen. Working to move this function another file and export same functions to find global scope.

  const submit = () => {
    setModalForm(true);
    axios
      .put(`https://dummyapi.io/data/v1/user/${props.dataUser.id}`, data, {
        headers: {
          "app-id": "63473330c1927d386ca6a3a5",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          showToast();
        }
        if (res.status != 200) {
          showToast2();
        }
        setModalForm(false);
      });
  };
  //Submit function to update user information. Attached to button submit.

  const deleteUser = () => {
    setModalForm(true);
    axios
      .delete(`https://dummyapi.io/data/v1/user/${props.dataUser.id}`, {
        headers: {
          "app-id": "63473330c1927d386ca6a3a5",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          showToast3();
          navigation.navigate("Home");
        }
        if (res.status != 200) {
          showToast2();
        }
        setModalForm(false);
      });
  };
  //Delete user function. Attached to button delete.

  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/user/${props.dataUser.id}`, {
        headers: {
          "app-id": "63473330c1927d386ca6a3a5",
        },
      })
      .then((res) => setDataUser(res.data));
  }, [modalForm]);
  //Get main user information from user card by id.

  return (
    <View>
      <Card elevate size="$7" bordered themeInverse={true} marginBottom={50}>
        <Card.Header padded>
          <H2 fontWeight="bold">
            {dataUser.title +
              " " +
              dataUser.firstName +
              " " +
              dataUser.lastName}
          </H2>
          <Paragraph theme="alt2">Number ID: {dataUser.id}</Paragraph>
          <Separator marginVertical={15} />
          <H4 color="#000" fontWeight="bold">
            Edit personal info
          </H4>
          <Paragraph fontSize="$2" theme="alt2">
            Udpate data for his user.
          </Paragraph>
          <Separator marginVertical={15} />
          <Paragraph theme="alt1">Full name</Paragraph>
          <XStack alignItems="center" space="$1">
            <CircleUser color="#0078ff" />
            <Input
              flex={1}
              size={props.size}
              placeholder={`First name`}
              //   value={firstName}
              defaultValue={firstName}
              onChangeText={(val) => setFirstName(val)}
              backgroundColor="#ffff"
            />
            <Input
              flex={1}
              size={props.size}
              placeholder={`Last name`}
              //   value={lastName}
              defaultValue={lastName}
              onChangeText={(val) => setLastName(val)}
              backgroundColor="#ffff"
            />
          </XStack>
          <Separator marginVertical={15} />
          <Paragraph theme="alt1">Phone number</Paragraph>
          <XStack alignItems="center" space="$1">
            <Phone color="#0078ff" />
            <Input
              flex={1}
              size={props.size}
              placeholder={`Phone number`}
              //   value={props.dataUser.picture}
              defaultValue={dataUser.phone}
              onChangeText={(val) => setPhone(val)}
              keyboardType="number-pad"
              backgroundColor="#ffff"
            />
          </XStack>
          <Separator marginVertical={15} />
          <Paragraph theme="alt1">Profile pic</Paragraph>
          <XStack alignItems="center" space="$1">
            <ImagePlus color="#0078ff" />
            <Input
              flex={1}
              size={props.size}
              placeholder={`Picture link`}
              //   value={props.dataUser.picture}
              defaultValue={dataUser.picture}
              onChangeText={(val) => setPicLink(val)}
              backgroundColor="#ffff"
            />
          </XStack>
          <Separator marginVertical={15} />
          <View>
            {modalForm ? (
              <YStack padding="$2" space="$4" alignItems="center">
                <Spinner size="large" color="$blue10" />
              </YStack>
            ) : (
              <View style={{ gap: 15 }}>
                <Button
                  onPress={submit}
                  size="$4"
                  theme="active"
                  backgroundColor="#0078ff"
                  color="#ffff"
                  icon={<SaveAll size="$2" />}
                  fontWeight="bold"
                >
                  Submit
                </Button>
                <Button
                  onPress={deleteUser}
                  size="$4"
                  theme="active"
                  backgroundColor="gray"
                  color="#ffff"
                  icon={<Trash size="$2" />}
                ></Button>
              </View>
            )}
          </View>
        </Card.Header>
      </Card>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
    </View>
  );
};

export default DataUserCard;

const styles = StyleSheet.create({});
