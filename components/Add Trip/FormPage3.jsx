import { Button } from "@rneui/themed";
import { View, Text, FlatList } from "react-native";
import { fetchActivites, geoCodeLocations, postTrip } from "../../utilis";
import LottieView from "lottie-react-native";
import styles from "../../App-stylesheet";
import { useState } from "react";

const FormPage3 = ({
  origin,
  destination,
  checkedList,
  activities,
  setActivities,
  // setDestinationObj,
  // destinationObj,
  // originObj,
  // setOriginObj,
  isLoading,
  setIsLoading,
  user,
  arrivalDate,
  departureDate
}) => {

  const [animatedLoader, setAnimatedLoader]= useState(false)

  let destinationObj
  let originObj
  let activitiesGeo
  const requestObj = { city: destination, preferences: checkedList };

  const handlePress = () => {
    // isLoading(true); // assuming isLoading is a function that returns a Promise
    fetchActivites(requestObj)
      .then((returnedActivities) => {
        console.log(returnedActivities);
        setActivities(returnedActivities);
        // return isLoading(false); // assuming isLoading is a function that returns a Promise
      })
      .then(() => {
        console.log("complete");
        console.log(activities, "activities");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // })
  const cityLocations = [
    { city: origin, id: "origin" },
    { city: destination, id: "destination" },
  ];
  // const handlePressFinal = () => {
  //   console.log(origin, "origin");
  //   // isLoading(true); // assuming isLoading is a function that returns a Promise
  //   geoCodeLocations(cityLocations)
  //     .then((returnedCityObjs) => {
  //       console.log(returnedCityObjs, "returnedcities");
  //       // const originReturned = returnedCityObjs
  //       // .filter((city) => city.id === "origin")
  //       // .map(({ id, city, coordinates }) => {
  //       //   console.log( {id:id, city:city, coordinates:coordinates })
  //       //   originObj=({id:id, city:city, coordinates:coordinates })
  //       //   return { id, city, coordinates };
  //       // });
      
  //       originObj = returnedCityObjs.filter((city) => city.id === "origin")[0]
  //       destinationObj = returnedCityObjs.filter((city) => city.id === "destination")[0]

  //       // return isLoading(false); // assuming isLoading is a function that returns a Promise
  //     })
  //     .then(() => {activitiesGeo = geoCodeLocations(activities)})
  //     .then(() => {
  //       console.log(activitiesGeo)
  //       setActivities(activitiesGeo)}).then(()=>{
          
          
  //         // console.log(originObj, "Final origin obj");
  //         // console.log(destinationObj, "Final destination obj");
  //         console.log(activities, "result of geocoding activities");
  //       }).then(()=>{
  //         // console.log("finished")
  //         const TripObj = {
  //           title: "trip10",
  //           author: user.name,
  //           city: originObj.city,
  //           coordinates: originObj.coordinates,
  //           preferences:checkedList,
  //           //
  //           destination: {
  //             city: destinationObj.city,
  //             coordinates: destinationObj.coordinates,
  //             arrivalDate: arrivalDate,
  //             departureDate: departureDate,
  //           },
  //           activities:activitiesGeo,
            
  //         }
  //         // console.log(activities)
  //   postTrip(TripObj)

  //   }).then((response)=>{
  //     //isLoading(false)
  //     //popup of some kind
  //     //navigate to Home Page
  //     console.log (response, "after post Trip")
  //   })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const handlePressFinal = async () => {
      try {
      // Assuming isLoading is a function that returns a Promise
      //await isLoading(true);
  
      const returnedCityObjs = await geoCodeLocations(cityLocations);
      console.log(returnedCityObjs, "returnedcities");
      
      originObj = returnedCityObjs.filter((city) => city.id === "origin")[0];
      destinationObj = returnedCityObjs.filter((city) => city.id === "destination")[0];
     
      activitiesGeo = await geoCodeLocations(activities);
      console.log(activitiesGeo,"result of geocoding activities");
           
      const TripObj = {
        title: "trip15",
        author: user.name,
        city: originObj.city,
        coordinates: originObj.coordinates,
        preferences: checkedList,
        //
        destination: {
          city: destinationObj.city,
          coordinates: destinationObj.coordinates,
          arrivalDate: arrivalDate,
          departureDate: departureDate,
          activities: activitiesGeo
        // .map(activity => {
        //   try {
        //     return activity;
        //   } catch (error) {
        //     console.error(error);
        //   }
        // }),
      }};

      const response = await postTrip(TripObj);
      console.log(response, "after post Trip");
  } catch (error) {
      console.error(error);
    }
  };


  const Item = ({name}) => (
    <View style={styles.h4}>
      <Text style={styles.body}>{name}</Text>
    </View>
  );

  const MainView = ()=>{
    return (<View>
      <Text> Activities from chat gpt here </Text>
      <Button onPress={handlePress}> Generate Itinerary</Button>
      <Text> State: Origin:{origin} Obj:{!originObj?<Text/>:originObj.id}</Text>
      <Text> State: Destination: {destination} Obj:{!destinationObj?<Text/>:destinationObj.id}</Text>
      <FlatList data={activities} renderItem={((item)=>{<Item item={item}/>})}/>
      <Button onPress={handlePressFinal}> GeoCode and Send</Button>
    </View>
  )}

  const LoadPage =()=>{
    return (
    <View>
      <LottieView
        source={require("./126076-comacon-planning.json")}
        style={styles.animation}
        autoPlay
      />
    </View>
    )
  }

  return (animatedLoader? <LoadPage/>: <MainView/>
    
  );
};

export default FormPage3;
