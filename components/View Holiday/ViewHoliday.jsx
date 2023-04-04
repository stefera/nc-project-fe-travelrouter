import HolidayDetails from "./HolidayDetails";
import React, { useState, useEffect } from "react";
import React from "react";
import { useState } from "react";
import Header from "./Header";
import Map from "./Map";

import { View, Text, StyleSheet, Button } from "react-native";
import { fetchTripById } from "../../utilis";

// import { Header } from "@react-navigation/native";
import styles from "../../App-stylesheet";

const ViewHoliday = ({ viewHolidayId, setViewHolidayId, view, setView }) => {
  return (
    <View style={styles.topContainer}>
      <Text> View Holiday Comp </Text>
      <Map />
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
