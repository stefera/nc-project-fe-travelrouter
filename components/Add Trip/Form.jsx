import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, Button, TextComponent} from "react-native"
import DestinationDetails from "./DestinationDetails";
import FormPage2 from "./FormPage2";
import Activities from "./Activities";

const Form = (()=>{

    const [page, setPage] = useState(0)
    const [stops, setStops] = useState([])
    const [tripLength, setTripLength] = useState(0)
    const [checkedList, setCheckedList] = useState([])
    const [formData, setFormData] = useState(
       [  
        { testdestinationOne : ""},
        { testDestaintionTwo : ""}
])
    const formTitles = ["Destinations", "Preferences", "Activities"]

    const pageDisplay = () => {
        if (page === 0) {
            return <DestinationDetails stops={stops} setStops={setStops} tripLength={tripLength} setTripLength={setTripLength}/>
        } else if (page === 1) {
            return <FormPage2 checkedList={checkedList} setCheckedList={setCheckedList}/>
        } else if (page === 2) {
            return <Activities />
        }
    }

    return (
        <View className="form">
            <View className="progress-bar" style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}}>
                   <Text>add progress bar css here</Text>
            </View>        
                <View className="header">
                    <Text>{formTitles[page]}</Text>
                </View>
                    <View className="body">{pageDisplay()}</View>
                        <View className="footer"> */
                            <Button
                            title="Prev"
                            disabled={page === 0}
                            onPress={() => {
                            setPage((currPage) => currPage -1)
                            }} />
                            <Button 
                            title="Next"
                            disabled={page === formTitles.length -1}
                            onPress={() => {
                            setPage((currPage) => currPage +1)
                            }} />
                        </View>    
        </View>
        )
})


export default Form;