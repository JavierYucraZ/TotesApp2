import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Remote debugger"]);

import { NavigationContainer } from "@react-navigation/native";
import { InitApp } from "./App/Components/Auth";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* Encapsular para validacion de login */}
      <InitApp />
      {/* Encapsular para validacion de login */}
    </NavigationContainer>
  );
}
