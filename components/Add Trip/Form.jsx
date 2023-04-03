import { ButtonGroup } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, Button, TextComponent } from "react-native";
import styles from "../../App-stylesheet";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";

const Form = (({isLoading, setIsLoading, user})=>{

  const [page, setPage] = useState(0);
  const [stops, setStops] = useState([]);

  const [origin, setOrigin] = useState("");
  const [textInputOrigin, setTextInputOrigin] = useState("");

  const [destination, setDestination] = useState("");
  const [textInput, setTextInput] = useState("");

  const [arrivalDate, setArrivalDate] = useState();
  const [departureDate, setDepartureDate] = useState();
  const [arrivalDateInput, setArrivalDateInput] = useState(new Date());
  const [departureDateInput, setDepartureDateInput] = useState(
    arrivalDateInput ? arrivalDateInput : new Date()
  );


  const [originObj, setOriginObj] = useState({});
  const [destinationObj, setDestinationObj] = useState({});
  const [checkedList, setCheckedList] = useState([]);
  const [activities, setActivities] = useState([]);

        const formTitles = ["Destination Details", "Preferences", "Activities"];
  const subtitles = [
    "Input your holiday details below",
    "Let us know what you're interested in on this holiday",
    "Modify and save your itenarary below",
  ];
  const pageDisplay = () => {
        if (page === 0) {
            return <FormPage1 
            stops={stops} 
            setStops={setStops} 
            textInputOrigin={textInputOrigin}
            setTextInputOrigin={setTextInputOrigin}
            textInput={textInput}
            setTextInput={setTextInput}
            origin ={origin}
            setOrigin={setOrigin}
            destination={destination}
            setDestination={setDestination}
            arrivalDate={arrivalDate} 
            setArrivalDate={setArrivalDate} 
            departureDate={departureDate} 
            setDepartureDate={setDepartureDate} 
            arrivalDateInput={arrivalDateInput}
            setArrivalDateInput={setArrivalDateInput}
            departureDateInput={departureDateInput}
            setDepartureDateInput ={setDepartureDateInput}
            activities= {activities}
            setActivities= {setActivities}
            />
        } else if (page === 1) {
            return <FormPage2 checkedList={checkedList} setCheckedList={setCheckedList}/>
        } else if (page === 2) {
            return <FormPage3  originObj={originObj} setOriginObj={setOriginObj} destinationObj={destinationObj} setDestinationObj={setDestinationObj} destination={destination} origin={origin} checkedList={checkedList} activities= {activities} setActivities={setActivities} isLoading={isLoading} setIsLoading={setIsLoading} user={user} arrivalDate={arrivalDate} departureDate={departureDate}/>
        }

  


    }
    
    return (
    <View className="form">
      {/* <View className="progress-bar" style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}}>
                   <Text>add progress bar css here</Text>
            </View>         */} 
                <View>
  <Text style={styles.h3Margin}>{formTitles[page]}</Text>
  <Text style={styles.smallMargin}>
    {subtitles[page]}
    {origin && destination? (
      <Text>
        {'\n'}
        {origin} to {destination}
      </Text>
    ) : null}
  </Text>
</View>
                    <View className="body">{pageDisplay()}</View>
                        <View className="footer"> 
                            <Button 
                            title="Prev"
                            disabled={page === 0}
                            onPress={() => {
                            setPage((currPage) => currPage -1)
                            }} />
                            <Button style={styles.primaryButton}
                            title={"Next"}
                            disabled={page === formTitles.length -1}
                            onPress={() => {
                            setPage((currPage) => currPage +1)
                            }}> Next </Button>
                        </View>    
        </View>
        )
      })



export default Form;
