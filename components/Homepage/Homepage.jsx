import Dashboard from "./Dashboard"
import ListOfTrips from "./ListOfTrips";
import SocialFeed from "./SocialFeed";
import React from "react";
import {ScrollView, View} from "react-native"
import { Button, Icon } from "@rneui/themed";

 const Homepage = (({user})=>{

    return (<ScrollView>
            < Dashboard user={user}/>
            < ListOfTrips />
            < SocialFeed />
        </ScrollView>
    )

})

export default Homepage;
