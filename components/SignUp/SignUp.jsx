import React from "react";
import {View,Text, Image, useWindowDimensions, SafeAreaViewComponent} from "react-native"
import styles from "../../App-stylesheet";
import logo from "../../assets/logo.png"
import CustomInput from "../Custom-input/customInput";

const SignUp = (({isLoading,setIsLoading, user})=>{
 const {height} = useWindowDimensions()

    return (
        <View style={styles.onboardingContainer}>
            <View style={styles.onboardingContent}>

            <Text style={styles.h2}> SignIn page</Text>
            <Image source={logo} style={[styles.logo, {height: height*0.3}]} resizeMode="contain"></Image>
            <CustomInput/>
            </View>
          
        </View>

    )

})

export default SignUp;