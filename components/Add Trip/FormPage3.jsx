import { View, Text, FlatList } from "react-native";
import { Button } from "@rneui/base";
import { fetchActivites, geoCodeLocations, postTrip } from "../../utilis";
import { useState } from "react";
import LottieView from "lottie-react-native";
import styles from "../../App-stylesheet";
import { ActivitiesList } from "./ActivitiesList";
import { useNavigation } from "@react-navigation/native";

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
  departureDate,
  page,
  setPage,
}) => {
  const navigation = useNavigation();
  const [animatedLoader, setAnimatedLoader] = useState(false);
  // const [loader, setloader]= useState(false)

  const [formView, setFormView] = useState(0);
  const [activitiesTemp, setActivitiesTemp] = useState([]);
  let destinationObj;
  let originObj;
  // let activitiesTemp
  let activitiesGeo;

  const requestObj = { city: destination, preferences: checkedList };

  const cityLocations = [
    { city: origin, id: "origin" },
    { city: destination, id: "destination" },
  ];

  const Button1 = () => {
    return (
      <Button
        containerStyle={styles.primaryButtonContainer}
        buttonStyle={styles.secondaryButton}
        titleStyle={styles.buttonTitleText2}
        title="Back"
        disabled={page === 0}
        onPress={() => {
          setPage(1);
        }}
      />
    );
  };
  const Button2 = () => {
    return;
  };
  const Button3 = () => {
    return (
      <Button
        containerStyle={styles.primaryButtonContainer2}
        buttonStyle={styles.primaryButton}
        titleStyle={styles.buttonTitleText1}
        title={"Save Holiday"}
        disabled={!activitiesTemp.length}
      >
        {" "}
        Save Holiday{" "}
      </Button>
    );
  };

  const MainView = () => {
    const handlePress = async () => {
      try {
        setAnimatedLoader(true);

        const returnedActivities = await fetchActivites(requestObj);
        setActivities([...returnedActivities]);
        setActivitiesTemp([...returnedActivities]);
        setAnimatedLoader(false);
        setFormView(1);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <View style={{ marginVertical: 100 }}>
        <Text style={styles.inputHeaderPage3}>
          Find the best places to enjoy{" "}
          {checkedList.slice(0, -1).join(", ") +
            " and " +
            checkedList.slice(-1)}{" "}
          in {destination} by tapping the buttonbelow!{" "}
        </Text>
        <View style={{ paddingBottom: 100, margin: 10 }}>
          <Button
            title={
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 20 }}
              >
                Generate My Itinerary
              </Text>
            }
            buttonStyle={{
              backgroundColor: "#F56853",
              borderRadius: 20,
              height: 50,
            }}
            containerStyle={styles.primaryButtonContainer4}
            onPress={handlePress}
          />
          <View style={styles.buttonGroupHolder}>
            <Button1 />
            <Button3 />
          </View>

          {/* <Text style={styles.inputHeaderMargin}> </Text> */}
          {/* <FlatList data={activities} renderItem={((item)=>{<Item item={item}/>})}/> */}
        </View>
      </View>
    );
  };

  const SubmitPage = ({ activitiesTemp, setActivitiesTemp }) => {
    const handlePressFinal = async () => {
      try {
        // Assuming isLoading is a function that returns a Promise
        // await isLoading(true);

        const returnedCityObjs = await geoCodeLocations(cityLocations);
        console.log(returnedCityObjs, "returnedcities");

        originObj = returnedCityObjs.filter((city) => city.id === "origin")[0];
        destinationObj = returnedCityObjs.filter(
          (city) => city.id === "destination"
        )[0];

        activitiesGeo = await geoCodeLocations(activities);
        console.log(activitiesGeo, "result of geocoding activities");

        const TripObj = {
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
            activities: activitiesGeo,
            // .map(activity => {
            //   try {
            //     return activity;
            //   } catch (error) {
            //     console.error(error);
            //   }
            // }),
          },
        };
        const response = await postTrip(TripObj);

        console.log(response, "after post Trip");
        navigation.navigate("Home"); // navigate to Home
      } catch (error) {
        console.error(error);
      }
    };
    // const Item = ({name}) => (
    //   <View style={styles.h4}>
    //     <Text style={styles.body}>{name}</Text>
    //   </View>
    // );
    return (
      <View style={styles.topContainerMargin1}>
        <ActivitiesList
          activitiesList={activitiesTemp}
          setActivitiesTemp={setActivitiesTemp}
        />

        <View style={styles.buttonGroupHolder}>
          <Button1 />
          <Button
            containerStyle={styles.primaryButtonContainer2}
            buttonStyle={styles.primaryButton}
            titleStyle={styles.buttonTitleText1}
            title={"Save Holiday"}
            disabled={!activitiesTemp.length}
            onPress={handlePressFinal}
          >
            {" "}
            Save Holiday{" "}
          </Button>
        </View>

        {/* <Button containerStyle={styles.primaryButtonContainer} title="Save Holiday" onPress={handlePressFinal}> Save Holiday</Button> */}
      </View>
    );
  };
  const LoadPage = () => {
    return (
      <View style={{ padding: 100, paddingVertical: 200 }}>
        <View>
          <LottieView
            source={require("./126076-comacon-planning.json")}
            style={styles.animation}
            autoPlay
          />
        </View>
        <Text style={styles.h4center}>
          Fetching suggestions for {destination}...{" "}
        </Text>
      </View>
    );
  };
  return animatedLoader ? (
    <LoadPage />
  ) : !activitiesTemp.length ? (
    <MainView />
  ) : (
    <SubmitPage
      activitiesTemp={activitiesTemp}
      setActivitiesTemp={setActivitiesTemp}
    />
  );
};
export default FormPage3;
