import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TextStyle from "../styles/text";
import { TabWrapper } from "../components/TabWrapper";

const styles = StyleSheet.create({});

export const MyProfile = ({ navigation }) => {
  const {} = styles;

  return (
    <TabWrapper navigation={navigation}>
      <Text style={{ ...TextStyle.H4, textAlign: "center", marginTop: 10 }}>
        Discover the best resaurants, places to vist and stay in Sydney.
      </Text>
    </TabWrapper>
  );
};
