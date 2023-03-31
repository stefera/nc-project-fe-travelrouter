import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, FlatList, Text,ScrollView} from "react-native"
import reactDom from "react-dom";
import TripCard from "./TripCard";
import { List} from "react-native-paper";
import styles from "../../App-stylesheet";


const ListOfTrips = (({listOfHolidays})=>{
    console.log (listOfHolidays[0])
    return (<View 
    style={styles.container}
    >
        <Text style={styles.h4}>Your trips</Text>   
        <ScrollView horizontal = {true}>{
        listOfHolidays[0].map((selectedHoliday)=>{
            return <TripCard key={selectedHoliday.id} holiday={selectedHoliday}/>
        })}
        </ScrollView>
        
        </View>)
})

export default ListOfTrips
