import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, StyleSheet, CheckBox, Header} from "react-native"
import reactDom from "react-dom";
import { Button } from "react-native-paper";
import styles from "../../App-stylesheet";
import { NestableScrollContainer, NestableDraggableFlatList } from "react-native-draggable-flatlist";
import { ListItem } from "@rneui/themed";


const FormPage3 = (()=>{

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
    <Button style={styles.primaryButton}>
    Generate itenarary
    </Button>
    <View style={[styles.loader, styles.horizontal]}>
    
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
    </View>
  : 
  <View>
    <Button style={styles.primaryButton}>
    Generate itenarary
    </Button>
    <NestableScrollContainer>
      <Header text='List 1' />
      <NestableDraggableFlatList
        data={locationsList.filter((item)=>item.day===1)}
        renderItem={((item)=>{<ListItem style={styles} item={item}/>})}
        keyExtractor={((item)=>item.id)}
        onDragEnd={({ data }) => console.log(data)}
      />
      <Header text='List 2' />
      <NestableDraggableFlatList
        data={locationsList}
        renderItem={((item)=>{<ListItem style={styles} item={item}/>})}
        keyExtractor={((item)=>item.id)}
        onDragEnd={({ data }) => console.log(data)}
      />
      {/* <Header text='List 3' />
      <NestableDraggableFlatList
        data={data3}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onDragEnd={({ data }) => setData3(data)}
      /> */}
    </NestableScrollContainer>
  </View>)
  
})


 


export default FormPage3;