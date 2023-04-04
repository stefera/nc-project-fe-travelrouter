import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const HolidayDetails = ({ listOfHolidays }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Holiday Details Comp</Text>
      <Text>Start Location:</Text>
      <Text>End Location: </Text>
      <Text>Activities:</Text>
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
