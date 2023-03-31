import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, TextInput, CheckBox, ScrollView, FlatList} from "react-native"
import reactDom from "react-dom";
import { Input } from "@rneui/themed";
import styles from "../../App-stylesheet";
import { TouchableHighlight } from "react-native";

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
  // const handleSelect = (event) => {
  //   const value = event.target.value;
  //   const isChecked = event.target.checked;
 
  //   if (isChecked) {
  //     setCheckedList([...checkedList, value]);
  //     console.log(checkedList)
  //   } else {
  //     //Remove unchecked item from checkList
  //     const filteredList = checkedList.filter((item) => item !== value);
  //     setCheckedList(filteredList);
  //   }
  //   console.log(checkedList)
  // };
  const handleSelection = (value) => {
    if (checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
    } else if (!checkedList.includes(value)&& checkedList) {
      setCheckedList([...checkedList, value])
    }
      else{

        setCheckedList([...value]);
      }
  };
  const RenderItem = ( item ) => (
    <TouchableHighlight
      style={{
        width: '33.33%',
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: checkedList.includes(item.value) ? 'green' : 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => handleSelection(item.value)}
      key={item.id}
    >
      <Text style={styles.body}>{item.value}</Text>
    </TouchableHighlight>
  );


    return (
      <View style={{ flex: 1 }}>
      <FlatList
        data={preferences}
        renderItem={RenderItem}
        numColumns={3}
        keyExtractor={(item) => item.id}
      />
      
    </View>
  


    )
})



export default FormPage2;