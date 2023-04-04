import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, FlatList, Text, ScrollView } from "react-native";
import reactDom from "react-dom";
import TripCard from "./TripCard";
import { List } from "react-native-paper";
import styles from "../../App-stylesheet";

const ListOfTrips = ({
  testLocations,
  listOfHolidays,
  setView,
  view,
  viewHolidayId,
  setViewHolidayId,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h4}>Your trips</Text>
      <ScrollView horizontal={true}>
        {listOfHolidays.map((selectedHoliday) => {
          return (
            <TripCard
              key={selectedHoliday.id}
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
};

export default ListOfTrips;
