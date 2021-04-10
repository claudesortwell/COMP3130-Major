import React, { useEffect, useRef, useState } from "react";
import { Text, View, Platform, Image, ScrollView } from "react-native";
import { Input } from "../components/Input";
import { TabWrapper } from "../components/TabWrapper";
import TextStyle from "../styles/text";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";
import Color from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Button } from "../components/Button";

export const AddListing = ({ navigation }) => {
  const [selectCat, setSelectCat] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [2, 1],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TabWrapper navigation={navigation}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 10
        }}
      >
        <Text style={{ ...TextStyle.H2, textAlign: "left", paddingTop: 10 }}>Add Listing</Text>

        <View
          style={{
            width: "95%"
          }}
        >
          <Input label="Name"></Input>

          <Text style={{ ...TextStyle.H4, textAlign: "left", paddingTop: 10, marginBottom: 10 }}>
            Select A Category
          </Text>
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

          <View style={{ marginTop: 10 }}>
            <Input label="Description"></Input>
          </View>

          <View style={{ marginTop: 10 }}>
            <Input label="Locality"></Input>
          </View>

          <View style={{ marginTop: 10 }}>
            <Input label="Stars (out of 5)"></Input>
          </View>

          <Text style={{ ...TextStyle.H4, textAlign: "left", paddingTop: 10, marginBottom: 10 }}>Select image</Text>
          {image && (
            <Image source={{ uri: image }} style={{ width: "100%", height: 100, borderRadius: 10, marginBottom: 10 }} />
          )}
          <Button text="Select Image" onPress={pickImage} />

          <View style={{ marginTop: 10 }}>
            <Button text="Add Listing" style={{ marginTop: 10 }} type="primary" onPress={pickImage} />
          </View>
        </View>
      </ScrollView>
    </TabWrapper>
  );
};
