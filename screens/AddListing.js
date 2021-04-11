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
import * as Yup from "yup";
import { Formik } from "formik";
import { AntDesign } from "@expo/vector-icons";
import { useData } from "../context/DataContext";

export const AddListing = ({ navigation }) => {
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

  const data = useData();

  const AddSchema = Yup.object().shape({
    name: Yup.string()
      .test("len", "Must be less than 20 characters", (val) => val.length < 20)
      .required("Error: Missing name"),
    category: Yup.string().required("Error: Missing category"),
    description: Yup.string()
      .test("len", "Must be less than 150 characters", (val) => val.length < 150)
      .required("Error: Missing description"),
    locality: Yup.string().required("Error: Missing locality"),
    stars: Yup.string()
      .test("type", "Error: Stars must be a number", (value) => !isNaN(value))
      .required("Error: Missing stars"),
    image: Yup.string().required("Error: Missing image"),
    address: Yup.string().required("Error: Missing address"),
    coordinates: Yup.object({
      latitude: Yup.string().required("Error: Missing latitude"),
      longitude: Yup.string().required("Error: Missing longitude")
    })
  });

  return (
    <TabWrapper navigation={navigation}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: 20
        }}
      >
        <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
          <Text style={{ ...TextStyle.H2, textAlign: "left", paddingTop: 10 }}>Add Listing</Text>

          <View
            style={{
              width: "95%"
            }}
          >
            <Formik
              initialValues={{
                name: "",
                description: "",
                category: "",
                locality: "",
                address: "",
                coordinates: { latitude: "0", longitude: "0" },
                stars: "0",
                image: ""
              }}
              validationSchema={AddSchema}
              onSubmit={(values, { resetForm }) => {
                data.addListing({
                  ...values,
                  coordinates: {
                    latitude: Number(values.coordinates.latitude),
                    longitude: Number(values.coordinates.longitude)
                  },
                  stars: Number(values.stars),
                  userId: data.user.id
                });
                resetForm();
                navigation.navigate("Home");
              }}
            >
              {({ values, handleChange, handleSubmit, errors, touched, setFieldTouched, setFieldValue }) => (
                <>
                  {console.log(errors)}
                  <Input
                    label="Name"
                    onBlur={() => setFieldTouched("name")}
                    error={errors.name}
                    whiteLabel={false}
                    value={values.name}
                    touched={touched.name}
                    setValue={handleChange("name")}
                  />

                  <Text style={{ ...TextStyle.H4, textAlign: "left", paddingTop: 10, marginBottom: 10 }}>
                    Select A Category
                  </Text>
                  <RNPickerSelect
                    placeholder={{
                      label: "Select a category....",
                      value: "",
                      color: Color.grey50
                    }}
                    items={[
                      { label: "Restaurant", value: "Restaurant" },
                      { label: "Hotel", value: "Hotel" },
                      { label: "Tourism", value: "Tourism" }
                    ]}
                    onValueChange={handleChange("category")}
                    style={{
                      inputIOS: {
                        fontSize: 16,
                        backgroundColor: Color.white,
                        paddingVertical: 12,
                        paddingHorizontal: 10,
                        borderWidth: 1,
                        borderColor: touched.category && errors.category ? Color.red : Color.grey,
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
                    value={values.category}
                    Icon={() => {
                      return <Ionicons name="chevron-down" style={{ marginTop: 5 }} size={20} color={Color.main} />;
                    }}
                  />
                  {touched.category && errors.category && (
                    <View
                      style={{
                        marginTop: 3,
                        borderRadius: 5,
                        padding: 3
                      }}
                    >
                      <Text
                        style={{
                          ...TextStyle.H4,
                          color: Color.red
                        }}
                      >
                        <AntDesign name="exclamationcircle" size={14} />
                        {"  "}
                        {errors.category}
                      </Text>
                    </View>
                  )}

                  <View style={{ marginTop: 10 }}>
                    <Input
                      label="Description"
                      onBlur={() => setFieldTouched("description")}
                      error={errors.description}
                      whiteLabel={false}
                      touched={touched.description}
                      value={values.nadescriptionme}
                      setValue={handleChange("description")}
                    />
                  </View>

                  <View style={{ marginTop: 10 }}>
                    <Input
                      label="Locality"
                      onBlur={() => setFieldTouched("locality")}
                      error={errors.locality}
                      whiteLabel={false}
                      touched={touched.locality}
                      value={values.locality}
                      setValue={handleChange("locality")}
                    />
                  </View>

                  <View style={{ marginTop: 10 }}>
                    <Input
                      label="Address"
                      onBlur={() => setFieldTouched("address")}
                      error={errors.address}
                      whiteLabel={false}
                      touched={touched.address}
                      value={values.address}
                      setValue={handleChange("address")}
                    />
                  </View>

                  <View style={{ marginTop: 10 }}>
                    <Input
                      label="Longitude"
                      onBlur={() => setFieldTouched("coordinates.longitude")}
                      error={errors.coordinates ? errors.coordinates.longitude : undefined}
                      whiteLabel={false}
                      touched={touched.coordinates ? touched.coordinates.longitude : false}
                      value={values.coordinates.longitude}
                      setValue={handleChange("coordinates.longitude")}
                    />
                  </View>

                  <View style={{ marginTop: 10 }}>
                    <Input
                      label="Latitude"
                      onBlur={() => setFieldTouched("coordinates.latitude")}
                      error={errors.coordinates ? errors.coordinates.latitude : undefined}
                      whiteLabel={false}
                      touched={touched.coordinates ? touched.coordinates.latitude : false}
                      value={values.coordinates.latitude}
                      setValue={handleChange("coordinates.latitude")}
                    />
                  </View>

                  <View style={{ marginTop: 10 }}>
                    <Input
                      label="Stars (out of 5)"
                      onBlur={() => setFieldTouched("stars")}
                      error={errors.stars}
                      whiteLabel={false}
                      touched={touched.stars}
                      value={values.stars}
                      setValue={handleChange("stars")}
                    />
                  </View>

                  <Text style={{ ...TextStyle.H4, textAlign: "left", paddingTop: 10, marginBottom: 10 }}>
                    Select image
                  </Text>
                  {values.image !== "" && (
                    <Image
                      source={{ uri: values.image }}
                      style={{ width: "100%", height: 100, borderRadius: 10, marginBottom: 10 }}
                    />
                  )}
                  {touched.image && errors.image && (
                    <View
                      style={{
                        marginTop: 3,
                        borderRadius: 5,
                        padding: 3
                      }}
                    >
                      <Text
                        style={{
                          ...TextStyle.H4,
                          color: Color.red
                        }}
                      >
                        <AntDesign name="exclamationcircle" size={14} />
                        {"  "}
                        {errors.image}
                      </Text>
                    </View>
                  )}
                  <Button
                    text="Select Image"
                    onPress={async () => {
                      let result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [2, 1],
                        quality: 1
                      });

                      if (!result.cancelled) {
                        setFieldValue("image", result.uri);
                      }
                    }}
                  />

                  <View style={{ marginTop: 10 }}>
                    <Button
                      text="Add Listing"
                      style={{ marginTop: 10 }}
                      type="primary"
                      onPress={() => handleSubmit()}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </TabWrapper>
  );
};
