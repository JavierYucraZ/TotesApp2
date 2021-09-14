import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const resetPassword = ({ navigation }) => {
  const [animateBtn] = useState(new Animated.Value(1));
  const pressBtnResetPassword = () => {
    console.log("Recuperar password");
    Animated.spring(animateBtn, {
      toValue: 0.9,
      useNativeDriver: false,
    }).start();
    // navigation.navigate("ResetPassword");
    Alert.alert("", "Recuperaste tu password");
  };

  const leaveBtnResetPassword = () => {
    Animated.spring(animateBtn, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  const styleBtn = {
    transform: [{ scale: animateBtn }],
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Nueva contraseña"
          style={styles.textInput}
          placeholderTextColor="white"
        />
      </View>
      <View>
        <TextInput
          placeholder="Repetir la contraseña"
          style={styles.textInput}
          placeholderTextColor="white"
        />
      </View>
      <Animated.View style={styleBtn}>
        <TouchableWithoutFeedback
          onPressIn={() => pressBtnResetPassword()}
          onPressOut={() => leaveBtnResetPassword()}
        >
          <LinearGradient
            colors={["#0073ac", "#5793de"]}
            end={{ x: 0.8, y: 0.2 }}
            style={styles.button}
          >
            <Text style={styles.textButton}>Aceptar</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  textInput: {
    textAlign: "center",
    height: 50,
    width: 250,
    borderWidth: 0.5,
    borderRadius: 50,
    marginHorizontal: 20,
    color: "white",
    backgroundColor: "#9dadbc",
    paddingLeft: 10,
    marginVertical: 15,
    borderColor: "transparent",
    fontSize: 20,
  },
  button: {
    backgroundColor: "white",
    height: 50,
    width: 150,
    marginHorizontal: 55,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 55,
    borderColor: "#2e71dc",
    elevation: 5,
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
});
