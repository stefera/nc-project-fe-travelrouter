import React from "react";
import ContactUs from "./ContactUs";
import LogOut from "./LogOut";
import PrivacyPolicy from "./PrivacyPolicy"
import Profile from "./Profile"
import TermsAndConditions from "./TermsAndConditions"
import { View, Text } from "react-native"
import Preferences from "./Preferences";

const ProfileAndSettings = (()=>{
    return (
        <View>
            
            <ContactUs />
            <LogOut />
            <Preferences />
            <PrivacyPolicy />
            <Profile />
            <TermsAndConditions />
            

        </View>
    )
})

export default ProfileAndSettings;