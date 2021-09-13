import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";

import { Login } from "./Login";
import { forgotPassword } from "./forgotPassword";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const InitApp = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={forgotPassword}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#0073ac",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
