import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, TextInput, CheckBox, ScrollView, FlatList, TouchableOpacity} from "react-native"
import RenderItem from "./Preference";
import reactDom from "react-dom";
import { Input } from "@rneui/themed";
import styles from "../../App-stylesheet";
import { TouchableHighlight } from "react-native";
import { Card } from "@rneui/base";
import { Icon } from "@rneui/themed";

const FormPage2 = (( {checkedList, setCheckedList})=>{
     const preferences = [
    { id: "1", value: "Museums",icon: "museum" },
    { id: "2", value: "Art",icon: "brush" },
    { id: "3", value: "Culture",icon: "language" },
    { id: "4", value: "Nightlife",icon: "nightlife" },
    { id: "5", value: "Food",icon:"restaurant" },
    { id: "6", value: "Nature",icon: "park"},
    { id: "7", value: "Music", icon: "audiotrack"},
    { id: "8", value: "Sports",icon: "sports" },
    { id: "9", value: "Spas", icon: "spa" },
  ];
  
  const handleSelection = (value) => {

    if (checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
    } else if (!checkedList.includes(value)&& checkedList) {
      setCheckedList([...checkedList, value])
    }
      else{

        setCheckedList([...value]);
      }
      console.log(checkedList)
  };
  

    return (
   
    <View style={styles.topContainerMargin}>
          <ScrollView contentContainerStyle={styles.containerThree}>
            {
            preferences.map((item, index) => {
                return (
                    <TouchableOpacity
                    key={item.id}
                    value ={item.value}
                    onPress={(()=>{
                      console.log(item.value)
                      handleSelection(item.value)})}
                    style={{width: '31%',
                    alignItems: 'center',
                    justifyContent: "center",
                    marginBottom: 10,
                    rowGap:10,
                    backgroundColor: checkedList.includes(item.value) ? 'lightgreen' : 'white',
                    padding: 10,
                    borderRadius:15,
                    minHeight:90,
                    borderColor: checkedList.includes(item.value) ? 'green' : 'black',
}}>
                    <Icon type="material" name={item.icon}></Icon>
                    <Text>{item.value}</Text>
                    </TouchableOpacity>
                   
                    )
            })
            }
          </ScrollView>
        </View>
  


    )
})

export default FormPage2;
