import { StatusBar } from "expo-status-bar";
import React from "react";
import {View} from "react-native"
import reactDom from "react-dom";
import DashboardHeader from "./DashboardHeader";


const Dashboard = (({user})=>{
    return (
    <View>
        <DashboardHeader user={user} />
    </View>)
})

export default Dashboard;