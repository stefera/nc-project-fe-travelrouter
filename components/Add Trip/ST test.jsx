import { View,Button, Text, TextComponent} from "react-native";
import styles from "../../App-stylesheet";
import { useEffect, useState } from "react";
import { geoCodelocations } from "../../utils";
import { fetchItinerary } from "../../utils";

const StTest = (({isLoading,setIsLoading})=>{

    const [count, setCount] = useState(0)
    

const string = <Text>Give me a list of locations that I can visit over 5 days in Manchester, for 3 people that are interested in nightclubs and dinner. The output should be a JSON object, with the form of an array of javascript objects. Each location should have a name and address property.</Text>;

useEffect(()=>{
    if (count>0){
        console.log("here")
         setIsLoading(true)
         return fetchItinerary()
         .then((result) => {
           console.log("here 2",result);
           setIsLoading(false);
         })
         .catch((error) => {
           console.error(error);
           setIsLoading(false);
         })
}},[count])



    return  (isLoading? <View> <TextComponent>asdfasdf</TextComponent> </View>: 
    <View>
    <Button title = {"Generate itenarary"}style={styles.primaryButton} onPress={()=>{setCount(count+1)}}>
    <Text>GI</Text>
    </Button>
    </View>

)})

export default StTest;
