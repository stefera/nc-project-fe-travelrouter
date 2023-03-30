import { View, Text, Butt, FlatList } from "react-native"
import React, {useState} from "react";

const DestinationList = (( {stops, setStops, tripLength} )=>{

    const handleDelete = (index) => {
        const listOfStops = [...stops]
        listOfStops.splice(index, 1)
        setStops(listOfStops)

    }
    return (
        <View>
            <Text>Your {tripLength} day trip destinations:</Text>
                <FlatList>

                {
                stops.map((stop, index) => {
                    return (
                            <li key={index}>
                                <Text>{stop}</Text>
                                <Button 
                                title="Remove"
                                onClick={() => handleDelete(index)} />
                            </li>

                            )
                    })
                }

                </FlatList> 
        </View>
    )
})

export default DestinationList