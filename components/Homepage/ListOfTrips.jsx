import { StatusBar } from "expo-status-bar";
import { React, useEffect, useState } from "react";
import { View, FlatList, Text, ScrollView } from "react-native";
import reactDom from "react-dom";
import TripCard from "./TripCard";
import { List } from "react-native-paper";
import styles from "../../App-stylesheet";
import { fetchAllHolidays } from "../../utilis";

const ListOfTrips = ({ setView, view, viewHolidayId, setViewHolidayId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [listOfHols, setListOfHols] = useState([]);

  useEffect(() => {
    fetchAllHolidays().then((data) => {
      //console.log(data.trips, "<< useEffect Homepage");

      //listOfHolidays = Array.from(data.trips);
      setListOfHols(data);

      //listOfHolidays = Object.values(JSON.parse(data.trips));

      console.log(listOfHols, "<< listOfHols ln31");
      setIsLoading(false);
    });
  }, [view, isLoading]);

  console.log(listOfHols.trips, "<< listOfHols ln 35");

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
          {listOfHols.trips.map((selectedHoliday) => {
            return (
              <TripCard
                key={selectedHoliday._id}
                id={selectedHoliday._id}
                destination={selectedHoliday.destination}
                startDate={selectedHoliday.startDate}
                preferences={selectedHoliday.preferences}
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
