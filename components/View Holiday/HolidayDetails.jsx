import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HolidayActivities from "./HolidayActivities";
import { fetchTripById } from "../../utilis";

const HolidayDetails = ({ viewHolidayId, view }) => {
  const [tripData, setTripData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTripById(viewHolidayId).then((data) => {
      setTripData([data]);

      console.log("tripData >> ", tripData);
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
      <View style={styles.container}>
        <Text style={styles.text}> Your Upcoming Trip!</Text>
        <Text>
          You are travelling from:{" "}
          <Text style={styles.bold}>{tripData[0].city}</Text>
        </Text>
        <Text>
          to <Text style={styles.bold}>{tripData[0].destination.city}</Text>
        </Text>
        <Text>
          on the{" "}
          <Text style={styles.bold}>
            {tripData[0].destination.arrivalDate.substring(0, 10)}
          </Text>
        </Text>
        <Text>
          {" "}
          until the{" "}
          <Text style={styles.bold}>
            {tripData[0].destination.departureDate.substring(0, 10)}
          </Text>
        </Text>
      </View>
    );
  }
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
  bold: {
    fontWeight: "bold",
  },
});

export default HolidayDetails;
