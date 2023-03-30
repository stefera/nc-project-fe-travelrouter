import React from "react";
import {View,Text} from "react-native"
import AddHolidayForm from "./AddHolidayForm";
import StTest from "./ST test";
import SocialFeed from "../Homepage/SocialFeed"
import Form from "./Form"


const AddTrip = ({isLoading,setIsLoading}) => {


    return (
        <View>
            <Text> Add trip ▼▼</Text>
            {/* <Form isLoading={isLoading} setIsLoading={setIsLoading}/> */}
            <StTest isLoading={isLoading} setIsLoading={setIsLoading}/>
            <SocialFeed />
        </View>

    )

}

export default AddTrip;