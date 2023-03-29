import React from "react";
import {View,Text} from "react-native"
import AddHolidayForm from "./AddHolidayForm";
import { Form } from "./Form";
import SocialFeed from "../Homepage/SocialFeed"


const AddTrip = (()=>{

    return (
        <View>
            <Text> Add trip ▼▼</Text>
            < Form />
            < SocialFeed />
        </View>

    )

})

export default AddTrip;