import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import reactDom from "react-dom";
import { ListItem } from "@rneui/themed";
import { List, Card } from "react-native-paper";
import styles from "../../App-stylesheet";
import { Icon } from "@rneui/themed";

const TripCard = ({
  id,
  destination,
  startDate,
  preferences,
  view,
  setView,
  setViewHolidayId,
  viewHolidayId,
}) => {
  const handlePress = (id) => {
    console.log(id);
    setViewHolidayId(id);
    setView(1);
    //console.log(view, viewHolidayId);
  };

  return (
    <ListItem
      Component={TouchableHighlight}
      containerStyle={styles.itemStyleHorizontal}
      onPress={(event) => {
        handlePress(id);
      }}
    >
      <ListItem.Content>
        <ListItem.Title>
          <Text>{destination}</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text style={styles.small}>
            Trip begins: {startDate.substring(0, 10)}
          </Text>
        </ListItem.Subtitle>
        <ListItem.Subtitle>
          <Text style={styles.small}>{preferences}</Text>
        </ListItem.Subtitle>
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
