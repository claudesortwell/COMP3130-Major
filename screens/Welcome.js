import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import TextStyle from "../styles/text";
import Colors from "../styles/colors";
import { Button } from "../components/Button";

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
  flexPadding: { height: "45%" },
  flexCenterText: {
    borderTopColor: Colors.grey,
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "65%"
  },
  flexBottomButtons: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "80%",
    marginBottom: 40,
    justifyContent: "flex-end"
  }
});

export const Welcome = ({ navigation }) => {
  const { mainContainer, imageBackground, flexContainer, flexPadding, flexCenterText, flexBottomButtons } = styles;

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
