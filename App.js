import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from "./store/store";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createTamagui, TamaguiProvider } from "tamagui";
import { config } from "@tamagui/config";

import UserProfile from "./screens/UserProfile";
import DefaultScreen from "./screens/DefaultScreen";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const Stack = createNativeStackNavigator();
  const tamaguiConfig = createTamagui(config);
  //Provider for Redux.
  //GestureHandlerRootview package needly for refresh function and material UI.
  //TamaguiProvider UI Framework.
  //Toast for UI alerts.
  //Navigation and Stack from React navigation.
  //DefaultScreen is the screen showed for default in React Navigation. Has the screen with a tab navigator main.
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <TamaguiProvider config={tamaguiConfig}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="DefaultScreen"
                component={DefaultScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="UserProfile" component={UserProfile} />
            </Stack.Navigator>
          </NavigationContainer>
        </TamaguiProvider>
        <Toast />
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
