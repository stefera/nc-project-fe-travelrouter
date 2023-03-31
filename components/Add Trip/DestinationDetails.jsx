import React, {useState} from "react";
import {View, Text, Button, TextInput} from "react-native"
import DestinationList from "./DestinationList";


const DestinationDetails = ({stops, setStops, tripLength, setTripLength})=>{

    const [textInput, setTextInput] = useState("")
    const [numberInput, setNumberInput] = useState(0)
  


    const handleAdd = ({setStops, textInput}) => {
        setStops([...stops, textInput])
        setTextInput("")
        console.log(setStops)
    }
    return (
        <View>
            <View className="destination-details-form">
               <Text>How many days is your trip?</Text>
               <TextInput
                    value={numberInput} 
                    onChangeText={setNumberInput}
                    keyboardType="numeric"
                    placeholder="Length of trip"
                />
                <Button
                        type="submit"
                        title="Add"
                        onPress={() => setTripLength(numberInput)}
                />
                <Text>Add Destination</Text>
                <TextInput
                    value={textInput} 
                    onChangeText={setTextInput}
                    placeholder="destination"/>
                <Button 
                    type="submit"
                    title="Add"
                    onPress={() => handleAdd(stops, textInput)} 
                />

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
}

export default DestinationDetails