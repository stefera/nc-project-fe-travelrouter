import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text} from "react-native"
import reactDom from "react-dom";
import DashboardHeader from "./DashboardHeader";
import styles from "../../App-stylesheet";


const Dashboard = (({user, styles,listOfHolidays})=>{
    return (
    <View 
    style={styles.dashboard}
    >
        <DashboardHeader user={user} styles={styles} listOfHolidays={listOfHolidays}/>
        <Text style={styles.h2}>Welcome back, {user.name}</Text>
        <Text style={styles.body}>Your next trip is in 5 days</Text>

        
    </View>)
})

export default Dashboard;