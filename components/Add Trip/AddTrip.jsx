import React from "react";
import {View,Text} from "react-native"
import AddHolidayForm from "./AddHolidayForm";
import Form  from "./Form";
import SocialFeed from "../Homepage/SocialFeed"


const AddTrip = (({isLoading,setIsLoading})=>{

    return (
        <View>
            <Text> Add trip ▼▼</Text>
            < Form isLoading={isLoading} setIsLoading={setIsLoading} />
            < SocialFeed />
        </View>

    )

})

export default AddTrip;