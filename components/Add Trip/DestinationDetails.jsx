import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, Button, TextInput} from "react-native"
import reactDom from "react-dom";
import DestinationList from "./DestinationList";


const DestinationDetails = (({stops, setStops, tripLength, setTripLength})=>{

    const [textInput, setTextInput] = useState("")
    const [numberInput, setNumberInput] = useState(null)



    const handleAdd = (event) => {
        setStops([...stops, textInput])
        setTextInput("")
    }
    return (
        <View>

            <View className="destination-details-form">
               <Text>How many days is your trip?</Text>
               <TextInput
                value={tripLength} onChange={(event) => setTripLength(event.target.value)}
                type="number"
                placeholder="Length of trip"/>
                    <Button
                        type="submit"
                        title="Add"
                        onClick={(setNumberInput)}
                        />
                <Text>Add Destination</Text>
                <TextInput
                value={textInput} onChange={(event) => setTextInput(event.target.value)}
                type="text"
                placeholder="destination"/>
                <Button 
                type="submit"
                title="Add"
                onClick={(handleAdd)} />

                    < DestinationList stops={stops} setStops={setStops} tripLength={tripLength}/>
        </View>
      
        <View>
            <Text>{stops}</Text>
        {/* <pre>
            {JSON.stringify(textInput)}
        </pre> */}
        </View> 
        
        </View>
    )
})

export default DestinationDetails