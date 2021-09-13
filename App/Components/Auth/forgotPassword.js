import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Caption } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export const forgotPassword = () => {
  const [animateBtn] = useState(new Animated.Value(1));
  const pressBtnSendEmail = () => {
    console.log("Recuperar password");
    Animated.spring(animateBtn, {
      toValue: 0.9,
      useNativeDriver: false,
    }).start();
  };

  const leaveBtnSendEmail = () => {
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
      <View style={styles.containerImage}>
        <FontAwesome name="envelope" size={50} color="#00c1e8" />
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Caption style={{ marginHorizontal: 50, textAlign: "center" }}>
            Correo Electronico
          </Caption>
          <TextInput
            placeholder="Correo Electronico"
            style={styles.textInput}
            placeholderTextColor="white"
          />
        </View>
      </View>
      <Animated.View style={styleBtn}>
        <TouchableWithoutFeedback
          onPressIn={() => pressBtnSendEmail()}
          onPressOut={() => leaveBtnSendEmail()}
        >
          <LinearGradient
            colors={["#0073ac", "#5793de"]}
            end={{ x: 0.8, y: 0.2 }}
            style={styles.button}
          >
            <Text style={styles.textButton}>Enviar</Text>
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
  },
  containerImage: {
    height: 150,
    width: 150,
    backgroundColor: "white",
    borderColor: "#3ba7e4",
    borderWidth: 4,
    borderRadius: 75,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    top: -50,
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
    marginVertical: 5,
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
