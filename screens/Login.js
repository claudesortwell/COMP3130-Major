import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, ImageBackground, StyleSheet, Image, TouchableWithoutFeedback, Alert } from "react-native";
import TextStyle from "../styles/text";
import Colors from "../styles/colors";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DismissKeyboard from "../components/DissmissKeyboard";
import { Formik } from "formik";
import * as Yup from "yup";
import { validateUser } from "../data/Users";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Error: Missing email"),
  password: Yup.string().required("Error: Missing password")
});

export const Login = ({ navigation }) => {
  const {
    mainContainer,
    imageBackground,
    flexContainer,
    flexTop,
    flexBottomText,
    flexBottomButtons,
    lineDraw
  } = styles;

  return (
    <View style={mainContainer}>
      <LinearGradient
        colors={[Colors.teal, Colors.blue]}
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 1, y: 1 }}
        style={imageBackground}
      >
        <View style={flexContainer}>
          <ImageBackground source={require("../assets/header_login.png")} style={{ width: "100%" }}>
            <View style={flexTop}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Welcome")}>
                <Image source={require("../assets/logo.png")} style={{ width: 80, height: 80 }} />
              </TouchableWithoutFeedback>
              <Image
                source={require("../assets/login_account_gradient_text.png")}
                style={{ width: 150, height: 60 }}
                resizeMode="contain"
              />
              <View style={lineDraw} />
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Register")}>
                <Text style={{ ...TextStyle.H5, color: Colors.main, zIndex: 1 }}>
                  New to SydneyCity?{" "}
                  <Text style={{ ...TextStyle.H4, color: Colors.main, textDecorationLine: "underline" }}>
                    Register Now
                  </Text>
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </ImageBackground>

          <Formik
            initialValues={{ email: "", password: "" }}
            // validationSchema={LoginSchema}
            onSubmit={(values, { resetForm }) => {
              if (validateUser(values)) {
                console.log(values);
                resetForm();
              } else {
                resetForm();
                Alert.alert("Invalid Login Details");
              }
              navigation.navigate("Home");
            }}
          >
            {({ values, handleChange, handleSubmit, errors, setFieldTouched }) => (
              <>
                <DismissKeyboard>
                  <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
                    <View style={{ width: "80%", marginTop: 30 }}>
                      <Input
                        keyboardType={"email-address"}
                        onBlur={() => setFieldTouched("email")}
                        label={"Email"}
                        placeholder={"Enter your account email address"}
                        whiteLabel={true}
                        error={errors.email}
                        value={values.email}
                        setValue={handleChange("email")}
                        icon={<Feather name="mail" size={16} />}
                      />
                      <View style={{ height: 40 }}></View>
                      <Input
                        secureTextEntry={true}
                        onBlur={() => setFieldTouched("password")}
                        label={"Password"}
                        placeholder={"Enter your account email adress"}
                        whiteLabel={true}
                        error={errors.password}
                        value={values.password}
                        setValue={handleChange("password")}
                        icon={<Ionicons name="key-outline" size={16} />}
                      />
                    </View>
                  </View>
                </DismissKeyboard>

                <View style={flexBottomButtons}>
                  <Button
                    text={"Login"}
                    onPress={handleSubmit}
                    icon={<AntDesign name="arrowright" size={16} color={Colors.main} />}
                  />
                  <View style={flexBottomText}>
                    <Text style={{ ...TextStyle.H5, color: Colors.white }}>New to SydneyCity?</Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Register")}>
                      <Text
                        style={{ ...TextStyle.H4, color: Colors.white, textDecorationLine: "underline" }}
                        onPress={() => navigation.navigate("Register")}
                      >
                        Register Now
                      </Text>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  flexContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%"
  },
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
  lineDraw: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    width: 120,
    height: 1,
    marginTop: 20,
    marginBottom: 15
  },
  flexBottomButtons: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "80%",
    marginBottom: 30,
    justifyContent: "flex-end"
  }
});
