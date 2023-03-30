import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, StyleSheet, CheckBox, Header, ActivityIndicator, FlatList} from "react-native"
import reactDom from "react-dom";
import { Button, List } from "react-native-paper";
import styles from "../../App-stylesheet";
// import { NestableScrollContainer, NestableDraggableFlatList } from "react-native-draggable-flatlist";
import { Card, ListItem } from "@rneui/themed";


const FormPage3 = (({isLoading, setIsLoading})=>{

    const [locationsList, setLocationsList] = useState([])

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
  
  return (isLoading? <View>
    <Button title = {"Generate itenarary"}style={styles.primaryButton}>
    
    </Button>
    <View style={[styles.loader, styles.horizontal]}>
    
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
    </View>
  : 
  <View>
    <Button title = {"Generate itenarary"}style={styles.primaryButton}>
    </Button>
    
      <Header text='List 1' />
      <FlatList
        data={locationsList}
        renderItem={((item)=>{<Card style={styles} item={item}/>})}
        keyExtractor={((item)=>item.id)}
        // onDragEnd={({ data }) => console.log(data)}
      />

  </View>)
  
})


export default FormPage3;
