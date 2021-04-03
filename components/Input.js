import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import TextStyle from "../styles/text";
import Colors from "../styles/colors";
import { AntDesign } from "@expo/vector-icons";

export const Input = ({ label, value, placeholder, setValue, icon, whiteLabel, error, hint, ...otherProps }) => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={{ ...TextStyle.H3, color: whiteLabel ? Colors.white : Colors.main, marginBottom: 8 }}>
        {icon && (
          <>
            {icon}
            {"   "}
          </>
        )}

        {label}
      </Text>
      <TextInput
        style={{ ...styles.main, borderColor: error ? Colors.red : Colors.grey }}
        onChangeText={(text) => setValue(text)}
        placeholder={placeholder}
        value={value}
        {...otherProps}
      />
      {error && (
        <View
          style={{
            marginTop: 3,
            borderRadius: 5,
            backgroundColor: whiteLabel ? "#ffffff" : "",
            padding: 3
          }}
        >
          <Text
            style={{
              ...TextStyle.H4,
              color: Colors.red
            }}
          >
            <AntDesign name="exclamationcircle" size={14} />
            {"  "}
            {error}
          </Text>
        </View>
      )}
      {hint && !error && <Text style={{ ...TextStyle.H4, color: Colors.main, marginTop: 8 }}>{hint}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 50,
    padding: 10,
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.white,
    borderWidth: 1
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
