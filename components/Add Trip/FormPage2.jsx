import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, TextInput, CheckBox} from "react-native"
import reactDom from "react-dom";
import { Input } from "@rneui/themed";

const FormPage2 = (( {checkedList, setCheckedList})=>{


     const preferences = [
    { id: "1", value: "Museums" },
    { id: "2", value: "Art" },
    { id: "3", value: "Culture" },
    { id: "4", value: "Nightlife" },
    { id: "5", value: "Food" },
    { id: "6", value: "Nature" },
    { id: "7", value: "Music" },
    { id: "8", value: "Sport" },
    { id: "9", value: "Spas" },
  ];

  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
 
    if (isChecked) {
      setCheckedList([...checkedList, value]);
      console.log(checkedList)
    } else {
      //Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
    console.log(checkedList)
  };
    return (
        <View>
          <Text>
            {
            preferences.map((item, index) => {
                return (
                    <View key={item.id}>
                    <Input
                    type ="checkbox"
                    value ={item.value}
                    onChange={handleSelect}/>
                    <Text>{item.value}</Text>
                    </View>
                    )
            })
            }
          </Text>
        </View>
  


    )
})



export default FormPage2;