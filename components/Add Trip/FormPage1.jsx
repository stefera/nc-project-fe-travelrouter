import { Input } from "@rneui/themed";
import React, {useState} from "react";
import {View, Text, Button, TextInput} from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "../../App-stylesheet";
import DestinationList from "./DestinationList";



const FormPage1 = ({stops,textInput, setTextInput, destination,setDestination, setStops, arrivalDate, setArrivalDate, arrivalDateInput, setArrivalDateInput,departureDateInput,setDepartureDateInput, departureDate, setDepartureDate})=>{

   
    //const [numberInput, setNumberInput] = useState(0)
    
  

    // const handleAdd = ({setStops, textInput}) => {
    //     setStops([...stops, textInput])
    //     setTextInput("")
    //     console.log(setStops)
    // }
    return (
        <View>
            <View className="destination-details-form">
            <Text style={styles.inputHeaderMargin}>Destination City</Text>

            <Input
                // label={"Destination"}
                // labelStyle={styles.inputHeader}
                    value={destination} 
                    onChangeText={((value)=>{
                       setTextInput(value)   
                       setDestination(value)                     
                    
                    })
                }
                    placeholder={"Enter Destination City"}/>

               <Text style={styles.inputHeaderMargin}>Arrival Date</Text>
               <DateTimePicker style={styles.dateTimePicker}
                    minimumDate={new Date()}
                    value={arrivalDate? arrivalDate:arrivalDateInput} 
                    onChange={(value) => {
                        //setArrivalDateInput(value)
                        //setArrivalDate(value)
                        //setDepartureDateInput(value)
                    }
                    }
                    
                    // placeholder="Select Arrival Date"
                />
                {/* <Button
                        type="submit"
                        title="Add"
                        onPress={() => setTripLength(numberInput)}
                /> */}
                <Text style={styles.inputHeaderMargin}>Departure Date</Text>
               <DateTimePicker style={styles.dateTimePicker}
                    minimumDate={departureDate? departureDate:departureDateInput}
                    value={departureDate? departureDate:departureDateInput} 
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