import React, { useState } from "react";
import { Text, Modal, View, TouchableOpacity, Image, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { TabWrapper } from "../components/TabWrapper";
import Color from "../styles/colors";
import Shadows from "../styles/shadow";
import TextStyle from "../styles/text";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import times from "lodash/times";
import { useData } from "../context/DataContext";

export const ViewListing = ({ route, navigation }) => {
  const data = useData();
  const listing = data.getAListing(route.params.id);
  const user = data.getUser("", listing.userId);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <TabWrapper navigation={navigation}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignSelf: "center",
          width: "95%"
        }}
      >
        <View
          style={{
            height: "95%",
            borderRadius: 10,
            ...Shadows.main,
            backgroundColor: Color.white
          }}
        >
          <Image
            style={{ width: "100%", height: 175, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
            source={listing.image.toString().startsWith("file:/") ? { uri: listing.image } : listing.image}
          />

          <View style={{ flex: 1, justifyContent: "center", alignSelf: "center", flexDirection: "column" }}>
            <View
              style={{
                paddingTop: 10,
                paddingLeft: 5,
                paddingRight: 5,
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <TouchableWithoutFeedback style={{ width: 40, height: 42, borderRadius: 5 }}>
                <View style={{ ...Shadows.main }}>
                  <LinearGradient
                    colors={[Color.teal, Color.blue]}
                    style={{ ...Shadows.main, padding: 10, marginLeft: 3, borderRadius: 5 }}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                  >
                    <MaterialCommunityIcons name="pencil" size={16} color="white" />
                  </LinearGradient>
                </View>
              </TouchableWithoutFeedback>
              <View style={{ flexGrow: 1, height: 42, paddingLeft: 10, paddingRight: 10, paddingTop: 4 }}>
                <Text numberOfLines={1} style={{ ...TextStyle.H2, color: Color.main, textAlign: "center" }}>
                  {listing.name}
                </Text>
              </View>
              <TouchableWithoutFeedback
                onPress={() => setDeleteOpen(!deleteOpen)}
                style={{ width: 40, height: 42, borderRadius: 5 }}
              >
                <View style={{ ...Shadows.main }}>
                  <LinearGradient
                    colors={[Color.red, Color.red]}
                    style={{ ...Shadows.main, padding: 10, marginLeft: 3, borderRadius: 5 }}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                  >
                    <Feather name="trash-2" size={16} color="white" />
                  </LinearGradient>
                </View>
              </TouchableWithoutFeedback>
              <Modal transparent visible={deleteOpen} animationType="fade" onRequestClose={() => {}}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setDeleteOpen(false);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    flex: 1
                  }}
                >
                  <View
                    style={{
                      width: 170,
                      borderRadius: 10,
                      right: 0,
                      position: "absolute",
                      top: 342,
                      padding: 10,
                      marginRight: 20,
                      backgroundColor: "#fff",
                      ...Shadows.main
                    }}
                  >
                    <Text style={{ ...TextStyle.H3, textAlign: "center" }}>Delete this listing?</Text>
                    <TouchableHighlight
                      onPress={() => {
                        const deleteReturn = data.deleteListing(listing.id);
                        setDeleteOpen(false);

                        if (deleteReturn) {
                          navigation.navigate("Search");
                        }
                      }}
                      style={{ padding: 7, marginTop: 10, backgroundColor: Color.red, borderRadius: 5 }}
                    >
                      <Text style={{ ...TextStyle.H3, textAlign: "center", color: Color.white }}>Yes</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => {
                        setDeleteOpen(false);
                      }}
                      style={{ padding: 7, marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: Color.grey50 }}
                    >
                      <Text style={{ ...TextStyle.H3, textAlign: "center" }}>Cancel</Text>
                    </TouchableHighlight>
                  </View>
                </TouchableOpacity>
              </Modal>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text numberOfLines={1} style={{ ...TextStyle.H3, color: Color.main, textAlign: "center" }}>
                Author:
              </Text>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("OtherProfile", { id: user.id })}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    marginLeft: 10,
                    marginRight: 10
                  }}
                  source={user.image}
                />
              </TouchableWithoutFeedback>

              <Text numberOfLines={1} style={{ ...TextStyle.H5, color: Color.main, textAlign: "center" }}>
                {user.name}
              </Text>
            </View>
            <View
              style={{
                padding: 10
              }}
            >
              <MapView
                style={{ width: "100%", height: 120, borderRadius: 5 }}
                region={{ ...listing.coordinates, latitudeDelta: 0.02, longitudeDelta: 0.02 }}
                region={{ ...listing.coordinates, latitudeDelta: 0.02, longitudeDelta: 0.02 }}
              >
                <Marker coordinate={listing.coordinates}></Marker>
              </MapView>
              <Text numberOfLines={1} style={{ ...TextStyle.H5, color: Color.main, marginTop: 5, textAlign: "center" }}>
                {listing.address}
              </Text>
              <View
                style={{
                  padding: 10,
                  marginTop: 15
                }}
              >
                <Text numberOfLines={1} style={{ ...TextStyle.H3, color: Color.main, textAlign: "center" }}>
                  Description
                </Text>

                <Text style={{ ...TextStyle.H5, color: Color.main, marginTop: 5, textAlign: "center" }}>
                  {listing.description}
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 5,
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {listing.locality && (
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                  <Text numberOfLines={1} style={{ ...TextStyle.H3, color: Color.main, textAlign: "center" }}>
                    Locality
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{ ...TextStyle.H5, marginTop: 15, color: Color.main, textAlign: "center" }}
                  >
                    {listing.locality}
                  </Text>
                </View>
              )}

              <View style={{ marginLeft: 10, marginRight: 10, marginTop: 4, width: "40%" }}>
                <Text numberOfLines={1} style={{ ...TextStyle.H3, color: Color.main, textAlign: "center" }}>
                  Rating
                </Text>
                <View
                  style={{
                    padding: 5,
                    marginRight: 3,
                    marginLeft: 3,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {listing.stars % 1 === 0 ? (
                    times(listing.stars, () => {
                      return (
                        <FontAwesome
                          name="star"
                          style={{ marginRight: 3, marginLeft: 3, marginTop: 10 }}
                          size={14}
                          color="black"
                        />
                      );
                    })
                  ) : (
                    <>
                      {times(listing.stars, () => {
                        return (
                          <FontAwesome
                            name="star"
                            style={{ marginRight: 3, marginLeft: 3, marginTop: 10 }}
                            size={14}
                            color="black"
                          />
                        );
                      })}
                      <FontAwesome
                        name="star-half-full"
                        style={{ marginRight: 3, marginLeft: 3, marginTop: 10 }}
                        size={14}
                        color="black"
                      />
                    </>
                  )}
                </View>
              </View>
              <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numberOfLines={1} style={{ ...TextStyle.H3, color: Color.main, textAlign: "center" }}>
                  Category
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ ...TextStyle.H5, marginTop: 15, color: Color.main, textAlign: "center" }}
                >
                  {listing.category}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TabWrapper>
  );
};
