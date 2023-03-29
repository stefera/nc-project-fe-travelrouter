import { View, Text } from "react-native"
import React, {useState} from "react";

const DestinationList = (( {stops, setStops} )=>{

    const handleDelete = (index) => {
        console.log(index, "index")
        const listOfStops = [...stops]
        listOfStops.splice(index, 1)
        setStops(listOfStops)

    }
    return (
        <View>
            <Text>list</Text>
            <ul>
            {
                stops.map((stop, index) => {
                    return (
                        <li key={stop}>
                            <h1>{stop}</h1>
                            <button onClick={() => handleDelete(index)}>Remove</button>
                        </li>

                    )
                })
            }

            </ul>
        </View>
    )
})

export default DestinationList