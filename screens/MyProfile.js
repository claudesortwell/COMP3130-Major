import React, { useEffect, useRef, useState } from "react";
import { Text, Animated, View, Image, ScrollView } from "react-native";
import TextStyle from "../styles/text";
import { TabWrapper } from "../components/TabWrapper";
import Shadows from "../styles/shadow";
import Colors from "../styles/colors";
import { LinearGradient } from "expo-linear-gradient";
import ListingCard from "../components/ListingCard";
import { Entypo } from "@expo/vector-icons";
import { useData } from "../context/DataContext";
import { getUser } from "../data/Users";

export const MyProfile = ({ route, navigation }) => {
  const data = useData();

  var user = null;
  if (route.params && route.params.id) {
    user = getUser("", route.params.id);
  }

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const listingMarginLeftAnim = useRef(new Animated.Value(-1000)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false
    }).start();
  };

  const listSlideIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(listingMarginLeftAnim, {
      toValue: 0,
      duration: 700,
      useNativeDriver: false
    }).start();
  };

  const listSlideOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(listingMarginLeftAnim, {
      toValue: -412,
      duration: 700,
      useNativeDriver: false
    }).start();
  };

  useEffect(() => {
    fadeIn();
    listSlideIn();
  }, []);

  return (
    <TabWrapper navigation={navigation} disableShadow={true}>
      <View style={{ flex: 1, zIndex: 0 }}>
        <View
          style={{
            backgroundColor: "#fff",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: 170,
            flexDirection: "column",
            alignItems: "center",
            zIndex: 5,
            ...Shadows.main
          }}
        >
          <Animated.View style={[{ flexDirection: "column", alignItems: "center" }, { opacity: fadeAnim }]}>
            <LinearGradient
              colors={[Colors.teal, Colors.blue]}
              start={{ x: 0.2, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{ padding: 5, borderRadius: 15 }}
            >
              <View style={{ padding: 4, borderRadius: 12, backgroundColor: "#fff" }}>
                <Image style={{ width: 55, height: 55 }} source={user ? user.image : data.user.image} />
              </View>
            </LinearGradient>
            <Text style={{ ...TextStyle.H3, textAlign: "center", marginTop: 5 }}>
              {user ? user.name : data.user.name}
            </Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={[
                  {
                    padding: 2,
                    margin: 10,
                    borderRadius: 5,
                    borderBottomLeftRadius: 20,
                    width: "45%"
                  }
                ]}
              >
                <Text style={{ ...TextStyle.H3, textAlign: "center" }}>
                  {
                    data.listings.filter((value) =>
                      user && value.userId === user.id ? true : !user && value.userId === data.user.id ? true : false
                    ).length
                  }
                </Text>
                <Text
                  style={{
                    ...TextStyle.H5,
                    textAlign: "center",
                    marginTop: 1.5,
                    marginBottom: 1.5,
                    color: Colors.darkgrey
                  }}
                >
                  Listings
                </Text>
                <Text style={{ ...TextStyle.H3, textAlign: "center" }}>
                  <Entypo name="list" size={16} />
                </Text>
              </View>
            </View>
          </Animated.View>
        </View>
        <Animated.View
          style={[
            { flexWrap: "wrap" },
            {
              left: listingMarginLeftAnim // Bind opacity to animated value
            }
          ]}
        >
          <ScrollView
            contentContainerStyle={{
              width: 410,
              paddingTop: 10,
              paddingLeft: 5,
              paddingRight: 20,
              paddingBottom: 170
            }}
          >
            {data.listings
              .filter((value) =>
                user && value.userId === user.id ? true : !user && value.userId === data.user.id ? true : false
              )
              .map((value, index) => (
                <React.Fragment key={"listings-" + index}>
                  <ListingCard navigation={navigation} data={value} />
                </React.Fragment>
              ))}
          </ScrollView>
        </Animated.View>
      </View>
    </TabWrapper>
  );
};
