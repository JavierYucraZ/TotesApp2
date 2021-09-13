import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { Caption, Divider, Subheading } from "react-native-paper";

export const Login = () => {
  const { height, width } = Dimensions.get("window");
  const [animateBtn] = useState(new Animated.Value(1));

  const pressBtnLogin = () => {
    console.log("Inicio de sesion");
    Animated.spring(animateBtn, {
      toValue: 0.9,
      useNativeDriver: false,
    }).start();
  };

  const leaveBtnLogin = () => {
    Animated.spring(animateBtn, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  const styleBtn = {
    transform: [{ scale: animateBtn }],
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image
          source={require("./../../../assets/svg.png")}
          //   https://svgwave.in/
          style={{ flex: 1 }}
          height={height}
          width={width}
        />
      </View>

      <View
        style={{
          height: height / 1.8,
          ...StyleSheet.absoluteFill,
          top: null,
        }}
      >
        <View style={styles.containerImage}>
          <FontAwesome name="user" size={50} color="#00c1e8" />
        </View>

        <View style={styles.inputContainer}>
          <View>
            <Caption style={{ textAlign: "center" }}>Nombre de usuario</Caption>
            <TextInput
              placeholder="Usuario"
              style={styles.textInput}
              placeholderTextColor="white"
            />
          </View>

          <View>
            <Caption style={{ textAlign: "center" }}>Contraseña</Caption>
            <TextInput
              placeholder="Contraseña"
              secureTextEntry
              style={styles.textInput}
              placeholderTextColor="white"
            />
          </View>
          <Divider style={{ margin: 10 }} />
        </View>

        <Animated.View style={styleBtn}>
          <TouchableWithoutFeedback
            onPressIn={() => pressBtnLogin()}
            onPressOut={() => leaveBtnLogin()}
          >
            <LinearGradient
              colors={["#0073ac", "#5793de"]}
              end={{ x: 0.8, y: 0.2 }}
              style={styles.button}
            >
              <Text style={styles.textButton}>Ingresar</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </Animated.View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableWithoutFeedback
            onPress={() => console.log("Recordar password")}
          >
            <Subheading style={{ color: "#3ba7e4" }}>
              ¿Olvidaste tu contraseña?
            </Subheading>
          </TouchableWithoutFeedback>
        </View>
      </View>
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
    height: 80,
    width: 80,
    backgroundColor: "white",
    borderColor: "#3ba7e4",
    borderWidth: 4,
    borderRadius: 50,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -70,
    left: Dimensions.get("window").width / 2 - 40,
  },
  inputContainer: {
    top: 40,
  },
  textInput: {
    textAlign: "center",
    height: 50,
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
    width: 250,
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
