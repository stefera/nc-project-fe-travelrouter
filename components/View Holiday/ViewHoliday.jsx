import HolidayDetails from "./HolidayDetails";
import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import { fetchTripById } from "../../utilis";

// import { Header } from "@react-navigation/native";
import styles from "../../App-stylesheet";

const ViewHoliday = ({ viewHolidayId, setViewHolidayId, setView }) => {
  const [tripData, setTripData] = useState({});

  // const tripData = [
  //   {
  //     title: "trip1",
  //     author: "fergus",
  //     startLocation: {
  //       city: "nottingham",
  //       coordinates: { latitude: 53.954, longitude: -1.4 },
  //     },
  //     destination: {
  //       city: "manchester",
  //       coordinates: { latitude: 50.5, longitude: -4 },
  //       arrivalDate: "2023-04-04",
  //       departureDate: "2023-04-08",
  //       activities: [
  //         {
  //           name: "The Warehouse Project",
  //           address: "Mayfield Train Station, The Depot, Manchester M1 2QF",
  //           coordinates: {
  //             latitude: 53.4756,
  //             longitude: -2.2253,
  //           },
  //         },
  //         {
  //           name: "Hidden at Downtex Mill",
  //           address: "Mayfield Train Station, The Depot, Manchester M1 2QF",
  //           coordinates: {
  //             latitude: 53.4756,
  //             longitude: -2.2253,
  //           },
  //         },
  //       ],
  //     },
  //   },
  // ];

  useEffect(() => {
    fetchTripById(viewHolidayId).then((trip) => {
      console.log(trip, "<< data in useEffect");
      setTripData(trip);
    });
  }, []);

  return (
    <View style={styles.topContainer}>
      <Text> View Holiday Comp </Text>

      {/* <Map>Map Comp</Map> */}
      <HolidayDetails tripData={tripData}>Hol Details Comp</HolidayDetails>
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
