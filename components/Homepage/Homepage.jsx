import Dashboard from "./Dashboard";
import ListOfTrips from "./ListOfTrips";
import SocialFeed from "./SocialFeed";
import ViewHoliday from "../View Holiday/ViewHoliday";
import { ScrollView, View, Text, ImageBackground } from "react-native";
import { Button, Icon } from "@rneui/themed";
import { React, useState, useEffect } from "react";
import { fetchAllHolidays } from "../../utilis";

const Homepage = ({ user, styles, isLoading, setIsLoading }) => {
  const [view, setView] = useState(0);
  const [viewHolidayId, setViewHolidayId] = useState(""); //go fetch

  //render page 0 when viewHolidayId != ""

  const Page0 = () => {
    return (
      <View style={styles.topContainer}>
        <ImageBackground
          source={require("./blob-scatter.png")}
          imageStyle={styles.backgroundImgHome}
        >
          <ScrollView>
            <Dashboard user={user} styles={styles} />
            <ListOfTrips
              setView={setView}
              view={view}
              viewHolidayId={viewHolidayId}
              setViewHolidayId={setViewHolidayId}
            />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  };

  const Page1 = () => {
    // call setViewHolidayId ({})

    return (
      <View style={styles.topContainer}>
        <ScrollView>
          <ViewHoliday
            viewHolidayId={viewHolidayId}
            setViewHolidayId={setViewHolidayId}
            view={view}
            setView={setView}
          />
        </ScrollView>
      </View>
    );
  };

  return view === 0 ? <Page0 /> : <Page1 />;
};

export default Homepage;
