import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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
import {
  Bookmark,
  ChevronDown,
  ChevronDownCircle,
  CircleUser,
  ImagePlus,
  Mail,
  Phone,
  UserPlus,
} from "@tamagui/lucide-icons";
import Toast from "react-native-toast-message";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";

const FormAddUser = () => {
  const [modalForm, setModalForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [picLink, setPicLink] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState(null);
  const [title, setTitle] = useState("");
  const data = {
    title: title,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    picLink: picLink,
    email: email,
  };
  //Format data required by the api for the correct request

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Added ✅",
      text2: "User has been successfully added ",
    });
  };

  const showToast2 = () => {
    Toast.show({
      type: "error",
      text1: "Error ⛔",
      text2: "Opps, something is wrong, please try again later",
    });
  };
  //Alert notifications.

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  const dataTitle = [
    { label: "mr", value: "mr" },
    { label: "dr", value: "dr" },
    { label: "miss", value: "miss" },
    { label: "ms", value: "ms" },
  ];
  //Dropdown menu for title selection designed about on api values.

  const submit = () => {
    setModalForm(true);
    console.log(data, "data antes de enviar");
    axios
      .post(`https://dummyapi.io/data/v1/user/create`, data, {
        headers: {
          "app-id": "63473330c1927d386ca6a3a5",
        },
      })
      .then((res) => {
        if (res.status == 200) {
          showToast();
          setFirstName("");
          setLastName("");
          setPhone("");
          setPicLink("");
          setEmail("");
        }
        if (res.status != 200) {
          showToast2();
        }
        setModalForm(false);
      });
  };
  //Function add user with .post request attached to button "Add user".

  return (
    <View>
      <Card elevate size="$7" bordered themeInverse={true} marginBottom={50}>
        <Card.Header padded>
          <H2 fontWeight="bold">Create new user</H2>
          <Paragraph theme="alt2">
            In this section you can add new user.
          </Paragraph>
          <Separator marginVertical={15} />

          <H3 fontWeight="bold">User info</H3>
          <Paragraph fontSize="$2" theme="alt2">
            Complete the information for add a new user.
          </Paragraph>
          <Separator marginVertical={15} />
          <XStack alignItems="center" space="$1">
            <Bookmark color="#0078ff" />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dataTitle}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select your title"
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setTitle(item.value);
              }}
              // renderLeftIcon={}
              renderRightIcon={() => <ChevronDownCircle size="$1" />}
              renderItem={renderItem}
            />
          </XStack>
          <Separator marginVertical={15} />
          <Paragraph theme="alt1">Full name</Paragraph>
          <XStack alignItems="center" space="$1">
            <CircleUser color="#0078ff" />
            <Input
              flex={1}
              //   size={props.size}
              placeholder={`First name`}
              //   value={firstName}
              defaultValue={firstName}
              onChangeText={(val) => setFirstName(val)}
              backgroundColor="#ffff"
            />
            <Input
              flex={1}
              //   size={props.size}
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
              //   size={props.size}
              placeholder={`Phone number`}
              //   value={props.dataUser.picture}
              defaultValue={phone}
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
              //   size={props.size}
              placeholder={`Picture link`}
              //   value={props.dataUser.picture}
              defaultValue={picLink}
              onChangeText={(val) => setPicLink(val)}
              backgroundColor="#ffff"
            />
          </XStack>
          <Separator marginVertical={15} />
          <Paragraph theme="alt1">Email</Paragraph>
          <XStack alignItems="center" space="$1">
            <Mail color="#0078ff" />
            <Input
              flex={1}
              //   size={props.size}
              placeholder={`Your email`}
              //   value={props.dataUser.picture}
              defaultValue={email}
              onChangeText={(val) => setEmail(val)}
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
                  icon={<UserPlus size="$2" />}
                  fontWeight="bold"
                >
                  Add user
                </Button>
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

export default FormAddUser;

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    width: "92%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});
