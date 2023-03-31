import { ButtonGroup } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, Button, TextComponent} from "react-native"
import styles from "../../App-stylesheet";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";

const Form = (()=>{

    const [page, setPage] = useState(0)
    const [stops, setStops] = useState([])
    //
    const [tripLength, setTripLength] = useState(0)
    const [arrivalDate, setArrivalDate] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    //
    const [checkedList, setCheckedList] = useState([])
    const [formData, setFormData] = useState(
       [  
        { testdestinationOne : ""},
        { testDestaintionTwo : ""}
])
    const formTitles = ["Destination Details", "Preferences", "Activities"]
    const subtitles = ["Input your holiday details below", "Let us know what you're interested in on this holiday", "Modify and save your itenarary below"]

    const pageDisplay = () => {
        if (page === 0) {
            return <FormPage1 stops={stops} setStops={setStops} arrivalDate={arrivalDate} setArrivalDate={setArrivalDate} departureDate={departureDate} setDepartureDate={setDepartureDate} />
        } else if (page === 1) {
            return <FormPage2 checkedList={checkedList} setCheckedList={setCheckedList}/>
        } else if (page === 2) {
            return <FormPage3 />
        }
    }

    return (
        <View className="form">
            {/* <View className="progress-bar" style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}}>
                   <Text>add progress bar css here</Text>
            </View>         */}
                <View >
                    <Text style={styles.h3Margin}>{formTitles[page]}</Text>
                    <Text style={styles.smallMargin}>{subtitles[page]}</Text>
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