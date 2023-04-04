import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, TouchableHighlight} from "react-native"
import reactDom from "react-dom";
import { ListItem } from "@rneui/themed";
import { List, Card } from "react-native-paper";
import styles from "../../App-stylesheet";
import { Icon } from "@rneui/themed";


const TripCard = (({holiday, view, setView, setViewHolidayId, viewHolidayId})=>{
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
            <ListItem.Subtitle> <Icon
            color="#ABABAB"
            name="person"
            size={25}
            type="material"
    /><Text style={styles.small}>{holiday.attendees}</Text></ListItem.Subtitle><ListItem.Subtitle> <Icon
    color="#ABABAB"
    name="person"
    size={25}
    type="material"
  /><Text style={styles.small}>Country Name</Text></ListItem.Subtitle>
        </ListItem.Content>
       
        </ListItem>
        )
})

export default TripCard
