import Header from "../Homepage/Header"
import Onboarding1 from "./Onboarding1"
import Onboarding2 from "./Onboarding2"
import Onboarding3 from "./Onboarding3"
import StartScreen from "./StartScreen"
import NavBar from "../Homepage/NavBar"
import React from "react";
import { View,Text } from "react-native-web"




const OnboardingMain = (() => {

    return (
        <View>
            <Text>This is the onboarding page ▼▼▼</Text>
            < Onboarding1 />
            < Onboarding2 />
            < Onboarding3 />
            < StartScreen />
        </View>
    )
})


export default OnboardingMain;