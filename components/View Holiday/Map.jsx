import React from "react";
import MapView, {Marker} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions"





const Map = () => {

      const tripData = [
        {
          title: "trip1",
          author: "fergus",
          startLocation: {
            city: "nottingham",
            coordinates: { 
              latitude: 53.954,
              longitude: -1.4
            },
          },
          destination: {
            city: "manchester",
            coordinates: {
              latitude: 50.5, 
              longitude: -4 },
            arrivalDate: "2023-04-04",
            departureDate: "2023-04-08",
            activities: [
              {
                name: "The Warehouse Project",
                address: "Mayfield Train Station, The Depot, Manchester M1 2QF",
                coordinates: {
                  latitude: 53.4756,
                  longitude: -2.2253,
                },
              },

              {
                name: "Hidden at Downtex Mill",
                address: "Mayfield Train Station, The Depot, Manchester M1 2QF", 
                coordinates: {
                  latitude: 53.4756,
                  longitude: -2.2253,
                },
              },
            ],
          },
        },
      ];


  return (
    <MapView
    style={{ height: "50%" }}
    provider="google"
    >
      {tripData.map((item, index) => {
         return (
           <Marker
             key={index}
             coordinate={item.startLocation.coordinates}
             title="Test marker start location"
             />
         )
      })}
      
       {tripData.map((item, index) => {
         return (
           <Marker
             key={index}
             coordinate={item.destination.coordinates}
             title="Test marker end location"
             />
         )
      })}

{tripData[0].destination.activities.map((activity, index) => {
          return (
          <Marker
            key={index}
            coordinate={activity.coordinates}
            title={activity.name}
            image={require("../../assets/beachflag.png")}
            /> 
            )
         })}
<MapViewDirections
  origin={{latitude: 53.954, longitude: -1.4}}
  destination={{latitude: 50.5, longitude: -4}}
  strokeWidth={3}
  apikey=""

  strokeColor="#FF0000"
/>

</MapView>
  );
}
export default Map;

