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
import { LoginService } from "../../../Services/Auth/login";

export const login = ({ navigation }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const [passwordVisible, setPasswordVisible] = useState(true);

  const { height, width } = Dimensions.get("window");
  const alto = Dimensions.get("screen").height;
  const ancho = Dimensions.get("screen").width;

  const [animateBtn] = useState(new Animated.Value(1));

  const pressBtnLogin = () => {
    Animated.spring(animateBtn, {
      toValue: 0.9,
      useNativeDriver: false,
    }).start();
    LoginService({ userName: userName, password: password });
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

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const goToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("./../../../assets/f.png")}
          //   https://svgwave.in/
          style={{ flex: 1, width: 392, height:825, resizeMode: 'cover'}}
          //height={alto}
          //width={ancho}
          //resizeMode="stretch"
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
          <FontAwesome name="map-marker" size={100} color="#5d8096" />
        </View>

        <View style={styles.inputContainer}>
          <View>
            <Caption style={{ marginHorizontal: 50 }}>
              Nombre de usuario
            </Caption>
            <TextInput
              placeholder="Usuario"
              style={styles.textInput}
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              onChangeText={(userName) => setUserName(userName)}
              value={userName}
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 50,
              }}
            >
              <Caption>Contraseña</Caption>
              <TouchableWithoutFeedback onPress={() => togglePassword()}>
                {passwordVisible ? (
                  <FontAwesome name="lock" size={20} color="black" />
                ) : (
                  <FontAwesome name="unlock" size={20} color="black" />
                )}
              </TouchableWithoutFeedback>
            </View>

            <TextInput
              placeholder="Contraseña"
              secureTextEntry={passwordVisible}
              style={styles.textInput}
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              value={password}
              onChangeText={(password) => setPassword(password)}
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
              colors={["#5d8096", "#c5d9f1"]}
              end={{ x: 2.5, y: 0.5 }}
              style={styles.button}
            >
              <Text style={styles.textButton}>Ingresar</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </Animated.View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableWithoutFeedback onPress={() => goToForgotPassword()}>
            <Subheading
              style={{ color: "#5d8096", textDecorationStyle: "solid" , textDecorationLine: "underline" }}
            >
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
    height: 150,
    width: 150,
    backgroundColor: "white",
    borderColor: "#5d8096",
    borderWidth: 4,
    borderRadius: 80,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -110,
    left: Dimensions.get("window").width / 2 - 70,
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
    color: "#rgba(0, 0, 0, 0.8)",
    backgroundColor: "#c5d9f1",
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "transparent",
    fontSize: 20,
  },
  button: {
    //backgroundColor: "white",
    backgroundColor: "#5d8096",
    height: 50,
    width: 280,
    marginHorizontal: 55,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 55,
    //borderColor: "#2e71dc",
    borderColor: "#5d8096",
    elevation: 5,
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
});
