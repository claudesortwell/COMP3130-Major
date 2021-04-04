import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, ImageBackground } from "react-native";
import TextStyle from "../styles/text";
import Colors from "../styles/colors";
import { Button } from "../components/Button";
import DataManager from "../data/DataManager";
import CommonStyles from "../styles/common";

export const Welcome = ({ navigation }) => {
  const {
    mainContainer,
    imageBackground,
    flexContainer,
    flexPadding,
    flexCenterText,
    flexBottomButtons
  } = CommonStyles;

  async function getUser() {
    let data = await DataManager.getInstance();
    return data.user;
  }

  useEffect(() => {
    getUser().then((value) => {
      if (value) {
        navigation.navigate("Home");
      }
    });
  }, []);

  return (
    <View style={mainContainer}>
      <ImageBackground source={require("../assets/splash_new.png")} style={imageBackground}>
        <View style={flexContainer}>
          <View style={flexPadding} />
          <View style={flexCenterText}>
            <Text style={{ ...TextStyle.H4, textAlign: "center", marginTop: 10 }}>
              Discover the best resaurants, places to vist and stay in Sydney.
            </Text>
          </View>

          <View style={flexBottomButtons}>
            <Button
              type="primary"
              text={"Login"}
              onPress={() => navigation.navigate("Login")}
              icon={<AntDesign name="arrowright" style={{ marginLeft: 20 }} size={16} color={Colors.white} />}
            />
            <View
              style={{
                margin: 10
              }}
            />
            <Button
              type=""
              text={"Register"}
              onPress={() => navigation.navigate("Register")}
              icon={<AntDesign name="arrowright" style={{ marginLeft: 20 }} size={16} color={Colors.main} />}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
