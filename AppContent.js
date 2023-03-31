import { NavigationContainer, Navigator } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "./components/Homepage/Homepage";
import AddTrip from "./components/Add Trip/AddTrip";
import ViewHoliday from "./components/View Holiday/ViewHoliday"
import ProfileAndSettings from "./components/Profile+Settings/ProfileAndSettings";
import { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// const HomeStack = createNativeStackNavigator();
// const AddTripStack = createNativeStackNavigator();
// const MoreStack = createNativeStackNavigator();

export default function AppContent() {
  const [isLoading, setIsLoading] = useState();
  const [user, setUser] = useState({ name: "guest" });
  const [listOfHolidays, setListOfHolidays] = useState([]);
  const [holiday, setHoliday] = useState({});
  const [preferences, setPreferences] = useState([]);
  const [newComment, setNewComment] = useState("");

  const Tab = createBottomTabNavigator();
  const HomeScreen = () => {
    return <Homepage />;
  };
  const AddTripScreen = () => {
    return <AddTrip />;
  };
  const MoreScreen = () => {
    return <ViewHoliday />;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" activeColor="#F56853">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Holiday"
          component={AddTripScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
