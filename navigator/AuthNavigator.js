import React, { useEffect } from "react";
import { Welcome } from "../screens/Welcome";
import { Login } from "../screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { Register } from "../screens/Register";
import TabNavigator from "./TabNavigator";

export default function AuthNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
    </Stack.Navigator>
  );
}
