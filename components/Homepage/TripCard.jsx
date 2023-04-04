import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import reactDom from "react-dom";
import { ListItem } from "@rneui/themed";
import { List, Card } from "react-native-paper";
import styles from "../../App-stylesheet";
import { Icon } from "@rneui/themed";

const TripCard = ({
  destination,
  startDate,
  preferences,
  view,
  setView,
  setViewHolidayId,
  viewHolidayId,
}) => {
  const handlePress = (key) => {
    console.log(key);
    setViewHolidayId(key);
    setView(1);
    //console.log(view, viewHolidayId);
  };

  return (
    <ListItem
      Component={TouchableHighlight}
      containerStyle={styles.itemStyleHorizontal}
      onPress={(event) => {
        handlePress(key);
      }}
    >
      <ListItem.Content>
        <ListItem.Title>
          <Text>{destination}</Text>
        </ListItem.Title>
        <ListItem.Title>
          <Text>{startDate}</Text>
        </ListItem.Title>
        {/* <ListItem.Subtitle>
          <Text style={styles.small}>{startDate}</Text>
        </ListItem.Subtitle> */}
        {/* <ListItem.Subtitle>
          {" "}
          <Icon color="#ABABAB" name="person" size={25} type="material" />
        </ListItem.Subtitle> */}
        {/* <ListItem.Subtitle>
          {" "}
          <Icon color="#ABABAB" name="person" size={25} type="material" />
          <Text style={styles.small}>Country Name</Text>
        </ListItem.Subtitle> */}
      </ListItem.Content>
    </ListItem>
  );
};

export default TripCard;
