import React, { useEffect, useRef, useState } from "react";
import { Text, StyleSheet, Animated, View, ScrollView, Picker } from "react-native";
import TextStyle from "../styles/text";
import { TabWrapper } from "../components/TabWrapper";
import { Listings } from "../data/Listings";
import ListingCard from "../components/ListingCard";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import Color from "../styles/colors";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({});

export const Search = ({ navigation }) => {
  const {} = styles;

  const [selectCat, setSelectCat] = useState(null);
  const values = {};

  const listingMarginLeftAnim = useRef(new Animated.Value(0)).current;
  const listSlideIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(listingMarginLeftAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start();
  };

  useEffect(() => {
    listSlideIn();
  }, []);

  return (
    <TabWrapper navigation={navigation}>
      <ScrollView
        contentContainerStyle={{
          width: "95%",
          paddingTop: 10,
          paddingLeft: 5,
          paddingRight: 5
        }}
      >
        <View style={{ marginLeft: 10, width: "100%" }}>
          <Text style={{ ...TextStyle.H2, marginTop: 1 }}>Search</Text>
          <View style={{ flex: 1, flexDirection: "row", marginTop: 3, marginBottom: 2 }}>
            <AntDesign name="tags" size={18} />
            <Text style={{ ...TextStyle.H3, marginTop: 1, marginLeft: 5 }}>Category</Text>
          </View>
          <RNPickerSelect
            placeholder={{
              label: "Select a category....",
              value: null,
              color: Color.grey50
            }}
            items={[
              { label: "Restaurant", value: "Restaurant" },
              { label: "Hotel", value: "Hotel" },
              { label: "Tourism", value: "Tourism" }
            ]}
            onValueChange={(value) => setSelectCat(value)}
            style={{
              inputIOS: {
                fontSize: 16,
                backgroundColor: Color.white,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: Color.grey,
                borderRadius: 4,
                color: "black",
                width: "100%",
                paddingRight: 30 // to ensure the text is never behind the icon
              },
              iconContainer: {
                top: 5,
                right: 15
              }
            }}
            value={selectCat}
            Icon={() => {
              return <Ionicons name="chevron-down" style={{ marginTop: 5 }} size={20} color={Color.main} />;
            }}
          />
        </View>
        {Listings.filter((value) => {
          if (selectCat) {
            if (selectCat === value.category) {
              return value;
            }
          } else {
            return value;
          }
        }).map((value, index) => (
          <Animated.View
            style={[
              {
                opacity: listingMarginLeftAnim // Bind opacity to animated value
              }
            ]}
            key={index}
          >
            <ListingCard data={value} />
          </Animated.View>
        ))}
      </ScrollView>
    </TabWrapper>
  );
};
