import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyProfile } from "../screens/MyProfile";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../styles/colors";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 80,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key
          });
        };
        console.log(options.tabBarIcon());

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            {isFocused ? (
              <LinearGradient
                colors={[Colors.teal, Colors.blue]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ padding: 5, borderRadius: 15 }}
              >
                <View style={{ padding: 4, borderRadius: 10, backgroundColor: "#fff" }}>{options.tabBarIcon()}</View>
              </LinearGradient>
            ) : (
              <View style={{ padding: 4, borderRadius: 10, backgroundColor: "#fff" }}>{options.tabBarIcon()}</View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={MyProfile}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Image source={require("../assets/search_icon.png")} style={{ width: 36, height: 36 }} />
        }}
      />
      <Tab.Screen
        name="123"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Image source={require("../assets/plus_icon.png")} style={{ width: 36, height: 36 }} />
        }}
        component={MyProfile}
      />
      <Tab.Screen
        name="1245"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Image source={require("../assets/user_icon.png")} style={{ width: 36, height: 36 }} />
        }}
        component={MyProfile}
      />
    </Tab.Navigator>
  );
}
// <Feather name="search" size={20} style={{ padding: 5 }} color={Colors.main} />
// <AntDesign name="pluscircleo" size={20} style={{ padding: 5 }} color="black" />
