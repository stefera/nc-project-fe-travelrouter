import { Input } from "@rneui/themed";
import React, {useState} from "react";
import {View, Text, Button, TextInput} from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "../../App-stylesheet";
import DestinationList from "./DestinationList";



const FormPage1 = ({stops, setStops, arrivalDate, setArrivalDate})=>{

    const [textInput, setTextInput] = useState("")
    const [numberInput, setNumberInput] = useState(0)
    const [arrivalDateInput, setArrivalDateInput] = useState(new Date())
    const [departureDateInput, setDepartureDateInput] = useState(new Date())
  

    const handleAdd = ({setStops, textInput}) => {
        setStops([...stops, textInput])
        setTextInput("")
        console.log(setStops)
    }
    return (
        <View>
            <View className="destination-details-form">
            <Text style={styles.inputHeaderMargin}>Destination City</Text>

            <Input
                // label={"Destination"}
                // labelStyle={styles.inputHeader}
                    value={textInput} 
                    onChangeText={setTextInput}
                    placeholder={"Enter Destination City"}/>

               <Text style={styles.inputHeaderMargin}>Arrival Date</Text>
               <DateTimePicker style={styles.dateTimePicker}
                    textColor={arrivalDateInput<=new Date()?"#ababab":"#00000"}
                    minimumDate={new Date()}
                    value={arrivalDateInput} 
                    onChange={() => setArrivalDateInput(arrivalDateInput)}
                    
                    // placeholder="Select Arrival Date"
                />
                {/* <Button
                        type="submit"
                        title="Add"
                        onPress={() => setTripLength(numberInput)}
                /> */}
                <Text style={styles.inputHeaderMargin}>Departure Date</Text>
               <DateTimePicker style={styles.dateTimePicker}
                    textColor={arrivalDateInput<=new Date()?"#ababab":"#00000"}
                    minimumDate={arrivalDateInput}
                    value={departureDateInput} 
                    onChange={() => setDepartureDateInput(departureDateInput)}
                    
                    // placeholder={new Date()}
                />

               
                
                {/* <Button 
                    type="submit"
                    title="Add"
                    onPress={() => handleAdd(stops, textInput)} 
                /> */}

                    {/* < DestinationList stops={stops} setStops={setStops}/> */}
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

export default FormPage1