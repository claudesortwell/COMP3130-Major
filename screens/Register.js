import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, ImageBackground, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import TextStyle from "../styles/text";
import Colors from "../styles/colors";
import { Button } from "../components/Button";
import { LinearGradient } from "expo-linear-gradient";
import CommonStyles from "../styles/common";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../components/Input";
import DismissKeyboard from "../components/DissmissKeyboard";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DataManager from "../data/DataManager";
import Color from "../styles/colors";
import * as ImagePicker from "expo-image-picker";
import { useData } from "../context/DataContext";

export const Register = ({ navigation }) => {
  const { flexTop, flexBottomText, flexBottomButtons } = styles;
  const data = useData();

  console.log(data.users);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Error: Invalid email").required("Error: Missing email"),
    name: Yup.string().required("Error: Missing name"),
    password: Yup.string().required("Error: Missing password"),
    image: Yup.string().required("Error: Missing image")
  });
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
          <Formik
            initialValues={{ name: "", image: "", email: "", password: "" }}
            validationSchema={RegisterSchema}
            onSubmit={async (values, { resetForm }) => {
              if (values) {
                data.addUser(values);
                navigation.navigate("Login");
                resetForm();
              } else {
                resetForm();
                Alert.alert("Invalid Register Details");
              }
            }}
          >
            {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched, setFieldValue }) => (
              <>
                <DismissKeyboard>
                  <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
                    <View style={{ width: "80%" }}>
                      <Text
                        style={{
                          ...TextStyle.H4,
                          color: Color.white,
                          textAlign: "left",
                          paddingTop: 10,
                          marginBottom: 10
                        }}
                      >
                        Select image
                      </Text>
                      {values.image !== "" && (
                        <Image
                          source={{ uri: values.image }}
                          style={{ width: 50, height: 50, borderRadius: 10, marginBottom: 10 }}
                        />
                      )}
                      {touched.image && errors.image && (
                        <View
                          style={{
                            marginTop: 3,
                            borderRadius: 5,
                            padding: 3
                          }}
                        >
                          <Text
                            style={{
                              ...TextStyle.H4,
                              color: Color.red
                            }}
                          >
                            <AntDesign name="exclamationcircle" size={14} />
                            {"  "}
                            {errors.image}
                          </Text>
                        </View>
                      )}
                      <Button
                        text="Select Profile Image"
                        onPress={async () => {
                          let result = await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            allowsEditing: true,
                            aspect: [1, 1],
                            quality: 1
                          });

                          if (!result.cancelled) {
                            setFieldValue("image", result.uri);
                          }
                        }}
                      />
                    </View>
                    <View style={{ width: "80%", marginTop: 10 }}>
                      <Input
                        onBlur={() => setFieldTouched("name")}
                        label={"Full Name"}
                        autoCapitalize="none"
                        whiteLabel={true}
                        touched={touched.name}
                        error={errors.name}
                        value={values.name}
                        setValue={handleChange("name")}
                        icon={<Ionicons name="person-outline" size={16} />}
                      />
                      <View style={{ height: 20 }}></View>
                      <Input
                        keyboardType={"email-address"}
                        onBlur={() => setFieldTouched("email")}
                        label={"Email"}
                        autoCapitalize="none"
                        placeholder={"Enter your account email address"}
                        whiteLabel={true}
                        touched={touched.email}
                        error={errors.email}
                        value={values.email}
                        setValue={handleChange("email")}
                        icon={<Feather name="mail" size={16} />}
                      />
                      <View style={{ height: 20 }}></View>
                      <Input
                        secureTextEntry={true}
                        onBlur={() => setFieldTouched("password")}
                        label={"Password"}
                        whiteLabel={true}
                        touched={touched.password}
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
                    text={"Create Account"}
                    onPress={() => handleSubmit()}
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
              </>
            )}
          </Formik>
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
