import React, { useEffect, useRef, useState } from "react";
import { Text, StyleSheet, Animated, View, ScrollView, Picker } from "react-native";
import { TabWrapper } from "../components/TabWrapper";

export const AddListing = ({ navigation }) => {
  return (
    <TabWrapper navigation={navigation}>
      <ScrollView
        contentContainerStyle={{
          width: "95%",
          paddingTop: 10,
          paddingLeft: 5,
          paddingRight: 5
        }}
      ></ScrollView>
    </TabWrapper>
  );
};
