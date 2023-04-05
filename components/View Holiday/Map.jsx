import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import React, { useEffect, useState } from "react";
import { fetchTripById } from "../../utilis";

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
