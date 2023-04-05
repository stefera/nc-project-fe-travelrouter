import HolidayDetails from "./HolidayDetails";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Map from "./Map";

import { View, Text, StyleSheet, Button } from "react-native";

// import { Header } from "@react-navigation/native";
import styles from "../../App-stylesheet";
const ViewHoliday = ({ viewHolidayId, setViewHolidayId, view, setView }) => {
  return (
    <View style={styles.topContainer}>
      <Text></Text>
      <Text></Text>
      <Map viewHolidayId={viewHolidayId} view={view}/>
      <HolidayDetails viewHolidayId={viewHolidayId} view={view}>
        Hol Details Comp
      </HolidayDetails>
      <Button
        title="Back"
        onPress={() => {
          setView(0);
        }}
      />
    </View>
  );
};

export default ViewHoliday;
