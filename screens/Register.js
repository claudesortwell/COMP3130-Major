import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, ImageBackground, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import TextStyle from "../styles/text";
import Colors from "../styles/colors";
import { Button } from "../components/Button";
import { LinearGradient } from "expo-linear-gradient";
import CommonStyles from "../styles/common";

export const Register = ({ navigation }) => {
  const { flexTop, flexBottomText, flexBottomButtons } = styles;

  return (
    <View style={{ ...CommonStyles.mainContainer }}>
      <LinearGradient
        colors={[Colors.teal, Colors.blue]}
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 1, y: 1 }}
        style={{ ...CommonStyles.imageBackground }}
      >
        <View style={{ ...CommonStyles.flexContainer }}>
          <ImageBackground source={require("../assets/header_login.png")} style={{ width: "100%" }}>
            <View style={flexTop}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Welcome")}>
                <Image source={require("../assets/logo.png")} style={{ width: 80, height: 80 }} />
              </TouchableWithoutFeedback>
              <Image
                source={require("../assets/create_account_gradient_text.png")}
                style={{ width: 120, height: 60 }}
                resizeMode="contain"
              />
              <View style={{ ...CommonStyles.lineDraw }} />
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
                <Text style={{ ...TextStyle.H5, color: Colors.main }}>
                  Already have an account?{" "}
                  <Text style={{ ...TextStyle.H4, color: Colors.main, textDecorationLine: "underline" }}>Login</Text>
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </ImageBackground>

          <View style={flexBottomButtons}>
            <Button
              text={"Create Account"}
              onPress={() => navigation.navigate("Login")}
              icon={<AntDesign name="arrowright" size={16} color={Colors.main} />}
            />
            <View style={flexBottomText}>
              <Text style={{ ...TextStyle.H5, color: Colors.white }}>Already have an account?</Text>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{ ...TextStyle.H4, color: Colors.white, textDecorationLine: "underline" }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Login
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  flexTop: {
    height: 270,
    width: "100%",
    paddingStart: 20,
    paddingTop: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  flexBottomText: {
    borderTopColor: Colors.white,
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    paddingTop: 10
  },
  flexBottomButtons: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "80%",
    marginBottom: 20,
    justifyContent: "flex-end"
  }
});