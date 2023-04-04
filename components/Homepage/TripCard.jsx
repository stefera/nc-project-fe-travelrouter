import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, TouchableHighlight} from "react-native"
import reactDom from "react-dom";
import { ListItem } from "@rneui/themed";
import { List, Card } from "react-native-paper";
import styles from "../../App-stylesheet";
import { Icon } from "@rneui/themed";


const TripCard = (({holiday, view, setView, setViewHolidayId, viewHolidayId})=>{
    const preferences = [
        { id: "1", value: "Museums",icon: "museum" },
        { id: "2", value: "Art",icon: "brush" },
        { id: "3", value: "Culture",icon: "language" },
        { id: "4", value: "Nightlife",icon: "nightlife" },
        { id: "5", value: "Food",icon:"restaurant" },
        { id: "6", value: "Nature",icon: "park"},
        { id: "7", value: "Music", icon: "audiotrack"},
        { id: "8", value: "Sports",icon: "sports" },
        { id: "9", value: "Spas", icon: "spa" },
      ];

const holidayId = holiday.id

    const handlePress = ((id)=>{
        console.log(id)
        setViewHolidayId(id)
        setView(1)
        console.log(view, viewHolidayId)
    })


    return (
        <ListItem Component={TouchableHighlight} containerStyle={styles.itemStyleHorizontal} onPress={((event)=>{handlePress(holidayId)})}>
        <ListItem.Content >
            <ListItem.Title><Text>{holiday.destination}</Text></ListItem.Title>
            <ListItem.Subtitle><Text style={styles.small}>{holiday.startDate}</Text></ListItem.Subtitle>
            <ListItem.Subtitle> 
                {/* {holiday.preferences.map((preference)=>{
               return ( */}
               <Icon
            color="#ABABAB"
            name={preference}
            size={25}
            type="material"
    /> 
    {/* )})} */}
            <Text style={styles.small}>{holiday.attendees}</Text></ListItem.Subtitle><ListItem.Subtitle> <Icon
    color="#ABABAB"
    name="person"
    size={25}
    type="material"
  />
  {/* <Text style={styles.small}>Country Name</Text> */}
  </ListItem.Subtitle>
        </ListItem.Content>
       
        </ListItem>
        )
})

export default TripCard
