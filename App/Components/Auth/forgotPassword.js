import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Caption } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export const forgotPassword = ({ navigation }) => {
  const [animateBtn] = useState(new Animated.Value(1));
  const pressBtnSendEmail = () => {
    console.log("Recuperar password");
    Animated.spring(animateBtn, {
      toValue: 0.9,
      useNativeDriver: false,
    }).start();
    navigation.navigate("RecoverPassword");
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
        <FontAwesome name="envelope" size={120} color="#5d8096" />
      </View>
      <View>
        <View>
          <Caption style={{ marginHorizontal: 50, textAlign: "center" }}>
            Correo Electrónico
          </Caption>
          <TextInput
            placeholder="Correo Electrónico"
            style={styles.textInput}
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
          />
        </View>
      </View>
      <Animated.View style={styleBtn}>
        <TouchableWithoutFeedback
          onPressIn={() => pressBtnSendEmail()}
          onPressOut={() => leaveBtnSendEmail()}
        >
          <LinearGradient
            colors={["#5d8096", "#c5d9f1"]}
            end={{ x: 2.5, y: 0.5 }}
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
    height: 180,
    width: 180,
    backgroundColor: "white",
    borderColor: "#5d8096",
    borderWidth: 4,
    borderRadius: 90,
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
