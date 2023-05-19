import React, { useState } from "react";
import {View,Text, Image, useWindowDimensions} from "react-native"
import styles from "../../App-stylesheet";
import logo from "../../assets/logo.png";
import logo1orange from "../../assets/logo1orange.png"
import logo1 from "../../assets/logo1.png"

import CustomInput from "../Custom-input/CustomInput";
import CustomButton from "../Custom-input/CustomButton";

const SignUp = (({isLoading,setIsLoading, user})=>{
    
    const [userFullName, setFullName]= useState("")
    const [userEmail, setUserEmail]= useState("")
    const [password, setPassword]= useState("")

    const {height} = useWindowDimensions()

    return (
        <View style={styles.onboardingContainer}>
            <View style={styles.onboardingContent}>
            <Text style={styles.h3center}>SignIn</Text>
            <Text style={[styles.body, {textAlign:"center"}]}>Sign up to find holiday activites all over the world</Text>
            <Image source={logo1} style={[styles.logo, {height: height*0.3}]} resizeMode="contain"></Image>
            <CustomInput value={userFullName} setValue={setFullName} placeholder={"Full Name"}/>
            <CustomInput value={userEmail} setValue={setUserEmail} placeholder={"Email"}/>
            <CustomInput value={password} setValue={setPassword} placeholder={"Password"}/>
            <CustomButton title="Sign Up"/>
            </View>
    
        </View>

    )

})

export default SignUp;