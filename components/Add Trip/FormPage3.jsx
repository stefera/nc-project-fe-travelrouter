import { Button } from "@rneui/themed";
import {View, Text} from "react-native"
import { fetchActivites, geoCodeLocations } from "../../utilis";
import { useState } from "react";

const FormPage3 =(({origin, destination, checkedList, activities, setActivities}) => {
    const [originObj, setOriginObj]= useState()
    const [destinationObj, setDestinationObj]= useState()

    const requestObj = {city:destination,
    preferences: checkedList}

    const handlePress = () => {
        // isLoading(true); // assuming isLoading is a function that returns a Promise
        fetchActivites(requestObj)
          .then((returnedActivities) => {
            console.log (returnedActivities)
            setActivities(returnedActivities);
            // return isLoading(false); // assuming isLoading is a function that returns a Promise
          })
          .then(() => {
            console.log("complete")
            console.log(activities, "activities");
          })
          .catch((error) => {
            console.error(error);
          });
      };

    // })
    const cityLocations= [{city:origin, id:"origin"}, {city:destination, id:"destination"}]
    const handlePressFinal = () => {
        console.log(origin, "origin")
        // isLoading(true); // assuming isLoading is a function that returns a Promise
        geoCodeLocations(cityLocations)
          .then((returnedCityObjs) => {
            console.log (returnedCityObjs, "returnedcities")
            setOriginObj(returnedCityObjs.filter((city)=>city.id === "origin")[0]);
            setDestinationObj(returnedCityObjs.filter((city)=>city.id === "destination")[0]);
            
            // return isLoading(false); // assuming isLoading is a function that returns a Promise
          })
          .then(() => {
            console.log(activities, "activities in then block")
            geoCodeLocations(activities)

          }).then(()=> console.log("finished"))
          .catch((error) => {
            console.error(error);
          });
      };

      
    return (

    <View>
        <Text> Activities from chat gpt here </Text>
        <Button onPress={handlePress}> Generate Itinerary</Button>

        <Button onPress= {handlePressFinal}> GeoCode</Button>
    </View>
    )
})


export default FormPage3;