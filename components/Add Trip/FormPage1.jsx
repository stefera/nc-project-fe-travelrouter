import { Input } from "@rneui/themed";
import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../../App-stylesheet";
import DestinationList from "./DestinationList";

const FormPage1 = ({
  stops,
  textInputOrigin,
  setTextInputOrigin,
  textInput,
  setTextInput,
  origin,
  setOrigin,
  destination,
  setDestination,
  setStops,
  arrivalDate,
  setArrivalDate,
  arrivalDateInput,
  setArrivalDateInput,
  departureDateInput,
  setDepartureDateInput,
  departureDate,
  setDepartureDate,
}) => {
  //const [numberInput, setNumberInput] = useState(0)
  // const handleAdd = ({setStops, textInput}) => {
  //     setStops([...stops, textInput])
  //     setTextInput("")
  //     console.log(setStops)
  // }

  return (
    <View>
      <View className="destination-details-form">
        <Text style={styles.inputHeaderMargin}>Origin City</Text>
        <Input
          // label={"Destination"}
          // labelStyle={styles.inputHeader}
          value={origin}
          onChangeText={(value) => {
            setTextInput(value);
            setOrigin(value);
          }}
          placeholder={"Enter Origin City"}
        />

        <Text style={styles.inputHeaderMargin}>Destination City</Text>
        <Input
          // label={"Destination"}
          // labelStyle={styles.inputHeader}
          value={destination}
          onChangeText={(value) => {
            setTextInput(value);
            setDestination(value);
          }}
          placeholder={"Enter Destination City"}
        />

        <Text style={styles.inputHeaderMargin}>Arrival Date</Text>
        <DateTimePicker
          style={styles.dateTimePicker}
          minimumDate={new Date()}
          value={arrivalDate ? arrivalDate : arrivalDateInput}
          onChange={(event, date) => {
            // console.log(event, "<<event", date, "<<date")
            setArrivalDateInput(date);
            setArrivalDate(date);
            //departureDate<=date&&departureDate? setDepartureDate(date):null
          }}

          // placeholder="Select Arrival Date"
        />
        {/* <Button
                        type="submit"
                        title="Add"
                        onPress={() => setTripLength(numberInput)}
                /> */}
        <Text style={styles.inputHeaderMargin}>Departure Date</Text>
        <DateTimePicker
          style={styles.dateTimePicker}
          minimumDate={
            arrivalDate
              ? arrivalDate
              : arrivalDateInput
              ? arrivalDateInput
              : new Date()
          }
          value={departureDate ? departureDate : departureDateInput}
          onChange={(event, date) => {
            // console.log(event, "<<event", date, "<<date")
            setDepartureDateInput(date);
            setDepartureDate(date);
          }}
        />
        {/* <Button 
                    type="submit"
                    title="Add"
                    onPress={() => handleAdd(stops, textInput)} 
                /> */}

        {/* < DestinationList stops={stops} setStops={setStops}/> */}
      </View>

      <View>
        {/* <Text>{stops}</Text> */}
        {/* <pre>
            {JSON.stringify(textInput)}
        </pre> */}
      </View>
    </View>
  );
};

export default FormPage1;
