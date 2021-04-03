import React from "react";
import { Text, TouchableHighlight, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Shadows from "../styles/shadow";
import Colors from "../styles/colors";

export const Button = ({ type, onPress, text, icon, iconRight }) => {
  if (type === "primary") {
    return (
      <TouchableHighlight
        style={{ borderRadius: 5 }}
        onPress={() => {
          if (onPress) onPress();
        }}
      >
        <View style={{ ...Shadows.main }}>
          <LinearGradient
            colors={[Colors.teal, Colors.blue]}
            style={{ ...styles.buttonPrimary, ...Shadows.main }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.buttonTextPrimary}>
              {iconRight}
              {"   "}
              {text}
              {"   "}
              {icon}
            </Text>
          </LinearGradient>
        </View>
      </TouchableHighlight>
    );
  } else {
    return (
      <TouchableHighlight
        style={{ borderRadius: 5 }}
        onPress={() => {
          if (onPress) onPress();
        }}
      >
        <View style={{ ...styles.buttonSecondary, ...Shadows.main }}>
          <Text style={styles.buttonTextSecondary}>
            {iconRight}
            {"   "}
            {text}
            {"   "}
            {icon}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: Colors.blue,
    padding: 16,
    borderRadius: 5
  },
  buttonTextPrimary: {
    fontFamily: "Inter_600SemiBold",
    textAlign: "center",
    fontSize: 14,
    color: Colors.white
  },
  buttonSecondary: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 5
  },
  buttonTextSecondary: {
    fontFamily: "Inter_600SemiBold",
    textAlign: "center",
    fontSize: 14,
    color: Colors.main
  }
});
