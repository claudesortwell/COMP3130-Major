import React, { useState } from "react";
import { View, Image, Text, TouchableHighlight } from "react-native";
import Shadows from "../styles/shadow";
import TextStyle from "../styles/text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../styles/colors";

const ListingCard = ({ data, navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: "100%",
        height: 175,
        borderRadius: 5,
        ...Shadows.main,
        margin: 10,
        flex: 1,
        flexDirection: "row"
      }}
    >
      <Image
        style={{ width: "50%", height: 175, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
        source={data.image.toString().startsWith("file:/") ? { uri: data.image } : data.image}
      />
      <View style={{ padding: 10, flex: 1 }}>
        <Text numberOfLines={1} style={{ ...TextStyle.H3 }}>
          {data.name}
        </Text>

        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <MaterialCommunityIcons name="map-marker" size={18} />
          <Text numberOfLines={2} style={{ ...TextStyle.H6, paddingLeft: 7, marginBottom: 7, width: "80%" }}>
            {data.address}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: data.locality ? 2 : 16 }}>
          <AntDesign name="tags" size={18} />
          <Text
            numberOfLines={1}
            style={{ ...TextStyle.H6, paddingLeft: 7, paddingTop: 3, marginBottom: 7, width: "85%" }}
          >
            {data.category}
          </Text>
        </View>

        {data.locality && (
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Entypo name="globe" size={14} style={{ paddingLeft: 2 }} />
            <Text numberOfLines={1} style={{ ...TextStyle.H6, paddingLeft: 9, marginTop: 1.5, width: "85%" }}>
              {data.locality}
            </Text>
          </View>
        )}

        <View style={{ flexDirection: "row", marginTop: data.locality ? 10 : 16 }}>
          <MaterialIcons name="star" size={18} color="black" />
          <Text
            numberOfLines={1}
            style={{ ...TextStyle.H6, paddingLeft: 7, paddingTop: 3, marginBottom: 7, width: "85%" }}
          >
            {data.stars}/5
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            style={{ borderRadius: 5, flexDirection: "row", marginTop: 3 }}
            onPress={() => {
              if (navigation) navigation.navigate("Listing", { id: data.id });
            }}
          >
            <LinearGradient
              colors={[Colors.teal, Colors.blue]}
              style={{ ...Shadows.main, borderRadius: 5, width: "100%" }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={{ ...TextStyle.H5, color: Colors.white, padding: 5, textAlign: "center" }}>View More</Text>
            </LinearGradient>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ListingCard;
