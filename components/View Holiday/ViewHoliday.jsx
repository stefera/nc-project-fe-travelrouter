import ViewMap from "./Map";
import HolidayDetails from "./HolidayDetails";
import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";
// import { Header } from "@react-navigation/native";
import styles from "../../App-stylesheet";

const ViewHoliday = ({ listOfHolidays,setView, view }) => {
  return (
    <View style={styles.topContainer}>
      <Text> View Holiday Comp </Text>

      <ViewMap>Map Comp</ViewMap>
      <HolidayDetails listOfHolidays={listOfHolidays}>
        Hol Details Comp
      </HolidayDetails>
      <Button 
                            title="Back"
                            onPress={() => {
                            setView(0)}}
                            />
    </View>
  );
};

export default ViewHoliday;
