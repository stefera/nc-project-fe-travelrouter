import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View} from "react-native"
import reactDom from "react-dom";
import DestinationDetails from "./DestinationDetails";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";

export const Form = (({isLoading, setIsLoading})=>{

    const [page, setPage] = useState(0)
    const [formData, setFormData] = useState(
       [  
        { testdestinationOne : ""},
        { testDestaintionTwo : ""}
    //     {
    //     destinationOne : "",
    //     destinationTwo: "",
    //     destinationThree: "",
    //     destinationFour: "",
    //     destinationFive: ""
    // },
])
    const formTitles = ["Destinations", "Preferences"]

    const pageDisplay = () => {
        if (page === 0) {
            return <DestinationDetails formData={formData} setFormData={setFormData}/>
        } else if (page === 1) {
            return <FormPage2 />
        }
    }

    return (
        <View>

        {/* <div className="form">
            <div className="progress-bar">
                <div style={{width: page === 0 ? "50%" : "100%"}}><p>add progress bar css here</></p>
            </div>
            <h1> Enter Your Destinations</h1>
            <div className="form-container"></div>
            <div className="header">
                <h1>{formTitles[page]}</h1>
            </div>
            <div className="body">{pageDisplay()}</div>
            <div className="footer">
                <button
                disabled={page === 0}
                onClick={() => {
                    setPage((currPage) => currPage -1)
                }}>Prev</button>
                <button 
                disabled={page === formTitles.length -1}
                onClick={() => {
                    setPage((currPage) => currPage +1)
                }}>Next</button>
            </div>
        </div> */}
        <FormPage3 isLoading={isLoading} setIsLoading={setIsLoading}/>
                </View>
        )
})


export default Form