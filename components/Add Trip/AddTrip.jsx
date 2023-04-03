import React from "react";
import {View,Text} from "react-native"
import Form from "./Form";
// var About = require('./components/Home').default
// const Form = require('./Form').default

const AddTrip = (({isLoading,setIsLoading, user})=>{

    return (
        <View>
            < Form user={user} isLoading={isLoading} setIsLoading={setIsLoading} />
        </View>

    )

})

export default AddTrip;