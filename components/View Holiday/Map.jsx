import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import React, { useEffect, useState } from "react";
import { fetchTripById } from "../../utilis";

// const tripData = [
//   {
//     title: "trip3",
//     author: "martin",
//     city: "london",
//     coordinates: {
//       latitude: 51.5072,
//       longitude: -0.1276,
//     },
//     preferences: ["nightlife", "food"],
//     destination: {
//       city: "manchester",
//       coordinates: {
//         latitude: 53.4808,
//         longitude: -2.2426,
//       },
//       arrivalDate: "2023-04-04",
//       departureDate: "2023-04-08",
//       activities: [
//         {
//           name: "The Warehouse Project",
//           address: "Mayfield Train Station, The Depot, Manchester M1 2QF",
//           coordinates: {
//             latitude: 53.4756,
//             longitude: -2.2253,
//           },
//         },
//         {
//           name: "Hidden at Downtex Mill",
//           address: "Mayfield Train Station, The Depot, Manchester M1 2QF",
//           coordinates: {
//             latitude: 53.4756,
//             longitude: -2.2253,
//           },
//         },
//       ],
//     },
//   },
// ];

const Map = ({ viewHolidayId, view }) => {
  const [tripData, setTripData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(viewHolidayId);
  useEffect(() => {
    fetchTripById(viewHolidayId).then((data) => {
      setTripData([data]);
      setIsLoading(false);
    });
  }, [view, isLoading]);

  console.log("tripData >> ", data);

  if (isLoading) {
    return <MapView></MapView>;
  } else {
    return (
      <MapView style={{ height: "200%" }} provider="google">
        {tripData.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={item.coordinates}
              title="Test marker start location"
            />
          );
        })}

        {tripData.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={item.destination.coordinates}
              title="Test marker end location"
            />
          );
        })}

        {tripData[0].destination.activities.map((activity, index) => {
          return (
            <Marker
              key={index}
              coordinate={activity.coordinates}
              title={activity.name}
              image={require("../../assets/beachflag.png")}
            />
          );
        })}

        {tripData.map((location) => {
          <MapViewDirections
            origin={location.coordinates}
            destination={location.destination.coordinates}
            strokeWidth={3}
            apikey=""
            strokeColor="#FF0000"
          />;
        })}
      </MapView>
    );
  }
};
export default Map;
