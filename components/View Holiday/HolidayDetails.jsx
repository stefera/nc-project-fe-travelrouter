import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HolidayActivities from "./HolidayActivities";

const HolidayDetails = ({ tripData }) => {
  // const tripData = [
  //   {
  //     title: "trip1",
  //     author: "fergus",
  //     startLocation: {
  //       city: "nottingham",
  //       coordinates: {              latitude: 53.954,              longitude: -1.4            },
  //     },
  //     destination: {
  //       city: "manchester",
  //       coordinates: {              latitude: 50.5,              longitude: -4            },
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

  return (
    <View styles={styles.container}>
      <Text styles={styles.text}> Holiday Details Comp</Text>
      <Text>You are travelling from: {tripData.startLocation.city}</Text>
      <Text>to {tripData.destination.city}</Text>
      <Text>on the{tripData.destination.arrivalDate}</Text>
      <Text> until the {tripData.destination.departureDate}</Text>

      <HolidayActivities />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignIHolidayDetailstems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default HolidayDetails;
