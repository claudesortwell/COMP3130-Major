import React, { useEffect } from "react";
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Modal } from "react-native";
import TextStyle from "../styles/text";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Shadows from "../styles/shadow";
import DataManager from "../data/DataManager";

export const TopBar = ({ navigation, disableShadow }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dataManager, setDataManager] = React.useState(null);

  useEffect(() => {
    DataManager.getInstance().then((instance) => setDataManager(instance));
  }, []);

  return (
    <View
      style={
        disableShadow
          ? {
              backgroundColor: "#fff",
              height: 100,
              paddingTop: 50,
              paddingLeft: 30,
              paddingRight: 20,
              flexDirection: "row",
              flexWrap: "wrap",
              zIndex: 20
            }
          : {
              backgroundColor: "#fff",
              height: 100,
              paddingTop: 50,
              paddingLeft: 30,
              paddingRight: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row",
              flexWrap: "wrap",
              zIndex: 20,
              ...Shadows.main
            }
      }
    >
      <Image source={require("../assets/logo.png")} style={{ width: 30, height: 30 }} />
      <Image
        resizeMode={"contain"}
        source={require("../assets/SydneyCity.png")}
        style={{ width: 80, height: 30, marginLeft: 10, marginTop: 2 }}
      />
      <TouchableWithoutFeedback onPress={() => setMenuOpen(!menuOpen)}>
        <View
          style={{
            position: "absolute",
            right: 0,
            paddingTop: 55,
            paddingLeft: 20,
            paddingRight: 30,
            zIndex: 100
          }}
        >
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </View>
      </TouchableWithoutFeedback>
      <Modal transparent visible={menuOpen} animationType="fade" onRequestClose={() => {}}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            dataManager.logout().then(() => {
              navigation.navigate("Welcome");
              setMenuOpen(false);
            });
          }}
          style={{
            backgroundColor: "transparent",
            flex: 1
          }}
        >
          <View
            style={{
              width: 120,
              borderRadius: 10,
              right: 0,
              position: "absolute",
              marginTop: 80,
              padding: 10,
              marginRight: 30,
              backgroundColor: "#fff",
              ...Shadows.main
            }}
          >
            <Text style={{ ...TextStyle.H3, textAlign: "center" }}>
              <MaterialIcons size={14} name="logout" />
              {"  "}
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
