import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HolidayActivities from "./HolidayActivities";

const HolidayDetails = ({ holidayData }) => {

  

  const tripData = [
    {
      title: "trip1",
      author: "fergus",
      startLocation: {
        city: "nottingham",
        coordinates: {              latitude: 53.954,              longitude: -1.4            },
      },
      destination: {
        city: "manchester",
        coordinates: {              latitude: 50.5,              longitude: -4            },
        arrivalDate: "2023-04-04",
        departureDate: "2023-04-08",
        activities: [
          {
            name: "The Warehouse Project",
            address: "Mayfield Train Station, The Depot, Manchester M1 2QF",
            coordinates: {
              latitude: 53.4756,
              longitude: -2.2253,
            },
          },
          {
            name: "Hidden at Downtex Mill",
            address: "Mayfield Train Station, The Depot, Manchester M1 2QF",
            coordinates: {
              latitude: 53.4756,
              longitude: -2.2253,
            },
          },
        ],
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Your Upcoming Trip!</Text>
      <Text>You are travelling from: {tripData[0].startLocation.city}</Text>
      <Text>to {tripData[0].destination.city}</Text>
      <Text>on the{tripData[0].destination.arrivalDate}</Text>
      <Text> until the {tripData[0].destination.departureDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default HolidayDetails;
