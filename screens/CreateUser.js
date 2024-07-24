import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FormAddUser from "../components/FormAddUser";
import { ScrollView } from "tamagui";
import AddUserHeader from "../components/AddUserHeader";

const CreateUser = () => {
  return (
    <ScrollView>
      <AddUserHeader />
      <FormAddUser />
    </ScrollView>
  );
};

export default CreateUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
