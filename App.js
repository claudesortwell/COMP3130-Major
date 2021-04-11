import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium,
  Inter_400Regular
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigator/AuthNavigator";
import DataManager from "./data/DataManager";

export default function App() {
  const [loading, setLoading] = useState(true);

  async function getUser() {
    let data = await DataManager.getInstance();
    return data.user;
  }

  useEffect(() => {
    getUser().then((value) => {
      setLoading(false);
    });
  }, []);

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular
  });

  if (!fontsLoaded || loading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthNavigator />

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
