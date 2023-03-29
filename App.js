//import { StatusBar } from "expo-status-bar";
//import { NavigationContainer, Navigator } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider, createTheme } from "@rneui/themed";
import AppContent from "./AppContent";

const theme = createTheme({
  lightColors: {
    primary: "#e7e7e8",
  },
  darkColors: {
    primary: "#000",
  },
  mode: "light",
});

export default function App() {
  return <ThemeProvider theme={theme}>{<AppContent />}</ThemeProvider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
