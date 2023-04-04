import HolidayDetails from "./HolidayDetails";
import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import { fetchTripById } from "../../utilis";

// import { Header } from "@react-navigation/native";
import styles from "../../App-stylesheet";

const ViewHoliday = ({ viewHolidayId, setViewHolidayId, view, setView }) => {
  const [tripData, setTripData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTripById(viewHolidayId).then((data) => {
      setTripData(data);

      setIsLoading(false);
    });
  }, [view, isLoading]);

  console.log("tripData >>", tripData);
  console.log("isLoading >>", isLoading);
  console.log("view >>", view);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text> Loading ...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.topContainer}>
        <Text> View Holiday Comp </Text>

        {/* <Map>Map Comp</Map> */}
        {/* <HolidayDetails tripData={tripData}>Hol Details Comp</HolidayDetails> */}

        <Button
          title="Back"
          onPress={() => {
            setView(0);
          }}
        />
      </View>
    );
  }
};

export default ViewHoliday;
