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
    Alert.alert("Contraseña restaurada", "Inicie sesión por favor", [
      {
        text: "Aceptar",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
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
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
        />
      </View>
      <View>
        <TextInput
          placeholder="Repetir la contraseña"
          style={styles.textInput}
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
        />
      </View>
      <Animated.View style={styleBtn}>
        <TouchableWithoutFeedback
          onPressIn={() => pressBtnResetPassword()}
          onPressOut={() => leaveBtnResetPassword()}
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
    color: "black",
    backgroundColor: "#c5d9f1",
    paddingLeft: 10,
    marginVertical: 15,
    borderColor: "transparent",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#5d8096",
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
