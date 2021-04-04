import React, { useEffect, useRef, useState } from "react";
import { Text, Animated, View, Image, ScrollView } from "react-native";
import TextStyle from "../styles/text";
import { TabWrapper } from "../components/TabWrapper";
import Shadows from "../styles/shadow";
import Colors from "../styles/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useUser } from "../context/UserContext";
import ListingCard from "../components/ListingCard";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { getListings, Listings } from "../data/Listings";
import { Button } from "../components/Button";

export const MyProfile = ({ navigation }) => {
  const user = useUser();

  const [tab, setTab] = useState("listing");

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
  }, []);

  useEffect(() => {
    if (tab === "listing") {
      listSlideIn();
    } else {
      listSlideOut();
    }
  }, [tab]);

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
                <Image style={{ width: 55, height: 55 }} source={user.image} />
              </View>
            </LinearGradient>
            <Text style={{ ...TextStyle.H3, textAlign: "center", marginTop: 5 }}>{user.name}</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={[
                  {
                    padding: 2,
                    margin: 10,
                    borderRadius: 5,
                    borderBottomLeftRadius: 20,
                    width: "45%"
                  },
                  tab === "listing" ? { backgroundColor: Colors.grey50 } : { backgroundColor: Colors.white }
                ]}
              >
                <TouchableWithoutFeedback onPress={() => setTab("listing")}>
                  <Text style={{ ...TextStyle.H3, textAlign: "center" }}>{Listings.length}</Text>
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
                </TouchableWithoutFeedback>
              </View>
              <View style={{ borderColor: Colors.grey50, height: "60%", alignSelf: "center", borderWidth: 0.5 }}></View>
              <View
                style={[
                  {
                    padding: 2,
                    margin: 10,
                    borderRadius: 5,
                    borderBottomRightRadius: 20,
                    width: "45%"
                  },
                  tab === "favorite" ? { backgroundColor: Colors.grey50 } : { backgroundColor: Colors.white }
                ]}
              >
                <TouchableWithoutFeedback onPress={() => setTab("favorite")}>
                  <Text style={{ ...TextStyle.H3, textAlign: "center" }}>{getListings(user.listingIds).length}</Text>
                  <Text
                    style={{
                      ...TextStyle.H5,
                      textAlign: "center",
                      marginTop: 1.5,
                      marginBottom: 1.5,
                      color: Colors.darkgrey
                    }}
                  >
                    Favorites
                  </Text>
                  <Text style={{ ...TextStyle.H3, textAlign: "center" }}>
                    <Ionicons name="ios-happy-sharp" size={16} />
                  </Text>
                </TouchableWithoutFeedback>
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
            {Listings.map((value, index) => (
              <React.Fragment key={"listings-" + index}>
                <ListingCard data={value} />
              </React.Fragment>
            ))}
          </ScrollView>
          <ScrollView
            contentContainerStyle={{
              width: 410,
              paddingTop: 10,
              paddingLeft: 5,
              paddingRight: 20,
              paddingBottom: 170
            }}
          >
            {getListings(user.listingIds).map((value, index) => (
              <React.Fragment key={"fav-" + index}>
                <ListingCard data={value} />
              </React.Fragment>
            ))}
          </ScrollView>
        </Animated.View>
      </View>
    </TabWrapper>
  );
};
