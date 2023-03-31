import { View, Text, Button, StyleSheet } from "react-native"
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
        <Text>  
                {
                stops.map((stop, index) => {
                    return (
                        <View key={index}>
                                <Text>{stop}</Text>
                                <Button 
                                title="Remove"
                                onPress={() => handleDelete(index)} />

                        </View>

                            )
                    })
                }

        </Text>

        </View>
    )
})

const styles = StyleSheet.create({
    container: {

    }

    

})

export default DestinationList