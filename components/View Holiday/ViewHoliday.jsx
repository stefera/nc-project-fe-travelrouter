import ViewMap from "./Map";
import HolidayDetails from "./HolidayDetails";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { Header } from "@react-navigation/native";

const ViewHoliday = ({ listOfHolidays }) => {
  return (
    <View>
      <Text> View Holiday Comp </Text>

      <ViewMap>Map Comp</ViewMap>
      <HolidayDetails listOfHolidays={listOfHolidays}>
        Hol Details Comp
      </HolidayDetails>
    </View>
  );
};

export default ViewHoliday;
