import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {View} from "react-native"
import reactDom from "react-dom";
import DestinationDetails from "./DestinationDetails";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import StTest from "./ST test";

export const Form = ({isLoading, setIsLoading})=>{



    return (
        <View>
        {/* <FormPage3 
        isLoading={isLoading} setIsLoading={setIsLoading}
        /> */}
        <StTest />
        </View>
        )
}
export default Form
