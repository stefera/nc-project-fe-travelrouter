import HolidayDetails from "./HolidayDetails";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Header from "./Header";
// import { Header } from "@react-navigation/native";

const ViewHoliday = ({ listOfHolidays }) => {

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
    <View>
      <Header />
      <Text> View holiday </Text>

      <Text> Map component here</Text>

      <HolidayDetails listOfHolidays={listOfHolidays} />
    </View>
  );
};

export default ViewHoliday;
