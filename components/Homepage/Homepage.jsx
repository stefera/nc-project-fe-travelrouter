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

  // stringify then parse.

  const testLocations = [
    {
      id: "1",
      destination: "Bali",
      startDate: "24th April, 2023",
      coordinates: { lat: 53.4744196, lng: -2.2408512 },
      attendees: 3,
    },
    {
      id: "2",
      destination: "Impossible Manchester",
      startDate: "24th April, 2023",
      coordinates: { lat: 53.4780445, lng: -2.248477 },
      attendees: 4,
    },
    {
      id: "3",

      destination: "The Alchemist",
      startDate: "24th April, 2023",
      coordinates: { lat: 53.4801988, lng: -2.2398574 },
    },
    {
      id: "4",

      destination: "Albert's Schloss",
      startDate: "27 Peter St, Manchester M2 5QR, United Kingdom",
      coordinates: { lat: 53.4782844, lng: -2.2478254 },
      attendees: 6,
    },
    {
      id: "5",

      destination: "The Milton Club",
      startDate: "24th April, 2023",
      coordinates: { lat: 53.4779428, lng: -2.2499581 },
      attendees: 1,
    },
    // {
    //   name: 'Cloud 23',
    //   address: 'Beetham Tower, 303 Deansgate, Manchester M3 4LQ, United Kingdom',
    //   coordinates: { lat: 53.4752573, lng: -2.250699 }
    // },
    // {
    //   name: 'Menagerie Restaurant & Bar',
    //   address: '1 New Bailey St, Manchester M3 5EX, United Kingdom',
    //   coordinates: { lat: 53.4817652, lng: -2.2548198 }
    // },
    // {
    //   name: 'Revolution Deansgate Locks',
    //   address: '19-20 Whitworth St W, Manchester M1 5LH, United Kingdom',
    //   coordinates: { lat: 53.4741783, lng: -2.2460601 }
    // },
    // {
    //   name: 'San Carlo Cicchetti',
    //   address: '20, House of Fraser, King St W, Manchester M3 2GQ, United Kingdom',
    //   coordinates: { lat: 53.4818756, lng: -2.2478721 }
    // }
  ];

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
            setView={setView}
          />
        </ScrollView>
      </View>
    );
  };

  return view === 0 ? <Page0 /> : <Page1 />;
};

export default Homepage;
