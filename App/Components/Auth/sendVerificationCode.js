import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { Title } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export const sendVerificationCode = ({ navigation }) => {
  const [animateBtn] = useState(new Animated.Value(1));
  const pressBtnSendCode = () => {
    console.log("Recuperar password");
    Animated.spring(animateBtn, {
      toValue: 0.9,
      useNativeDriver: false,
    }).start();
    navigation.navigate("ResetPassword");
  };

  const leaveBtnSendCode = () => {
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
      <Title style={styles.title}>
        Enviamos un código de verficación a su correo electrónico
      </Title>
      <View>
        <TextInput
          placeholder="Código de verificación"
          style={styles.textInput}
          keyboardType="phone-pad"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
        />
      </View>
      <Animated.View style={styleBtn}>
        <TouchableWithoutFeedback
          onPressIn={() => pressBtnSendCode()}
          onPressOut={() => leaveBtnSendCode()}
        >
          <LinearGradient
            colors={["#5d8096", "#c5d9f1"]}
            end={{ x: 2.5, y: 0.5 }}
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
    justifyContent: "flex-start",
    paddingVertical: 30,
  },
  title: {
    top: 30,
    marginHorizontal: 20,
    textAlign: "center",
    fontSize: 22,
    marginBottom: 60,
    paddingBottom: 20,
  },
  textInput: {
    textAlign: "center",
    height: 50,
    width: 250,
    borderWidth: 0.5,
    borderRadius: 50,
    marginHorizontal: 20,
    color: "black",
    backgroundColor: "#c5d9f1",
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
    borderColor: "#5d8096",
    elevation: 5,
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
});
