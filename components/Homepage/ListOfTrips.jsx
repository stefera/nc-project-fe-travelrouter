import { StatusBar } from "expo-status-bar";
import { React, useEffect, useState } from "react";
import { View, FlatList, Text, ScrollView } from "react-native";
import reactDom from "react-dom";
import TripCard from "./TripCard";
import { List } from "react-native-paper";
import styles from "../../App-stylesheet";
import { fetchAllHolidays } from "../../utilis";

const ListOfTrips = ({
  testLocations,
  setView,
  view,
  viewHolidayId,
  setViewHolidayId,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  let listOfHolidays = [];
  // c n p into dash
  useEffect(() => {
    fetchAllHolidays().then((data) => {
      //console.log(data.trips, "<< useEffect Homepage");
      console.log(data, "<<data in fetchallhols");
      listOfHolidays = data.trips;
      console.log(listOfHolidays, "<< listOfHols ln31");
      setIsLoading(false);
    });
  }, [view, isLoading]);

  console.log(listOfHolidays, "<< listOfHols ln 35");

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text> Loading ...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.h4}>Your trips</Text>
        <ScrollView horizontal={true}>
          {listOfHolidays.map((selectedHoliday) => {
            return (
              <TripCard
                key={selectedHoliday._id}
                holiday={selectedHoliday}
                setView={setView}
                view={view}
                viewHolidayId={viewHolidayId}
                setViewHolidayId={setViewHolidayId}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
};

export default ListOfTrips;
