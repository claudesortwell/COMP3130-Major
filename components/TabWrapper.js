import React from "react";
import { View, StyleSheet } from "react-native";
import { TopBar } from "../components/TopBar";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    zIndex: 10
  }
});

export const TabWrapper = ({ navigation, disableShadow, children }) => {
  const { mainContainer } = styles;
  return (
    <View style={mainContainer}>
      <TopBar navigation={navigation} disableShadow={disableShadow} />
      {children}
    </View>
  );
};
