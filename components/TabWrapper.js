import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TopBar } from "../components/TopBar";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    zIndex: 10
  }
});

export const TabWrapper = ({ navigation, children }) => {
  const { mainContainer } = styles;

  return (
    <View style={mainContainer}>
      <TopBar navigation={navigation} />
      <ScrollView style={{ zIndex: 5 }}>{children}</ScrollView>
    </View>
  );
};
