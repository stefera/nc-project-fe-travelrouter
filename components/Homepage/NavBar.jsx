import { StatusBar } from "expo-status-bar";
import React from "react";
import {View} from "react-native"
import reactDom from "react-dom";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Container, Button, ButtonGroup } from '@rneui/themed';
import { useState } from "react";


const NavBar = (()=>{
  const [selectedPage, setSelectedPage] = useState(1);

    return (<View>
        <ButtonGroup
      buttons={['Home', 'Add Holiday', 'More']}
      selectedIndex={selectedPage}
      onPress={(value) => {
        setSelectedPage(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
          
{/* 
        <button
        className="rounded-xl bg-brand-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700"
      title="Home"
        onClick={() => navigation.navigate('Home')}>
        Home
        </button>
      <button
        className="rounded-xl bg-brand-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700"
      title="Add Holiday"
        onClick={() => navigation.navigate('Add Holiday')}>
        Add Holiday
        </button> 
        
        <button
        className="rounded-xl bg-brand-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700"
      title="More"
        onClick={() => navigation.navigate('More')}>
        More
        </button> */}

    </View>
    )
})

export default NavBar;