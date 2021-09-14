import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";

import { Login } from "./Login";
import { forgotPassword } from "./forgotPassword";

import { createStackNavigator } from "@react-navigation/stack";
import { sendVerificationCode } from "./sendVerificationCode";
import { resetPassword } from "./resetPassword";

const Stack = createStackNavigator();

export const InitApp = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        title: "",
        headerStyle: {
          backgroundColor: "#0073ac",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ForgotPassword" component={forgotPassword} />
      <Stack.Screen name="RecoverPassword" component={sendVerificationCode} />
      <Stack.Screen name="ResetPassword" component={resetPassword} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
