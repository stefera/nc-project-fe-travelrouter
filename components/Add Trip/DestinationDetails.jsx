import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text} from "react-native"
import reactDom from "react-dom";
import DestinationList from "./DestinationList";


const DestinationDetails = (( {formData, setFormData})=>{

    const [stops, setStops] = useState([])
    const [textInput, setTextInput] = useState("")


// const handleChange = (event) => {
//         const { name, value} = event.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }

    const handleAdd = (event) => {
        setStops([...stops, textInput])
        console.log(stops, "This is the stops")
        setTextInput("")
    }
    return (
        <View>

        {/* <div className="destination-details-form">
            <p> Destination Details</p>
            <label htmlFor="destination">Add Destination</label>
            <input
            value={textInput} onChange={(event) => setTextInput(event.target.value)}
            type="text"
            placeholder="destination"></input>
            <button 
            type="submit"
            onClick={(handleAdd)}>Add</button>
            <br></br>

            < DestinationList stops={stops} setStops={setStops}/>
        </div>
      
        <div>
        <pre>
            {JSON.stringify(textInput)}
        </pre>
        </div> */}
        
        </View>
    )
})

export default DestinationDetails