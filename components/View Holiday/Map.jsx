import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import React, { useEffect, useState } from "react";
import { fetchTripById } from "../../utilis";


const Map = ({ viewHolidayId, view }) => {
  const [tripData, setTripData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [region, setDestinationRegion] = useState()

  console.log(viewHolidayId);
  useEffect(() => {
    fetchTripById(viewHolidayId).then((data) => {
      setTripData([data]);
      setIsLoading(false);
      setDestinationRegion(tripData[0].destination.coordinate)
    });
  }, [view, isLoading]);

  // const destinationCoordinates = tripData[0].destination.coordinates;

  if (isLoading) {
    return <MapView provider="google"></MapView>;
  } else {
    return (
      <MapView style={{ height: "200%" }} 
      provider="google"
      minZoomLevel={15}
      initialRegion={region} >
        {tripData.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={item.coordinates}
              title="Starting Location"
            />
          );
        })}

        {tripData.map((item, index) => {
          return (
            <Marker
              key="destinationcoords"
              coordinate={item.destination.coordinates}
              title="Holiday Destination:"
            />
          );
        })}

        {tripData[0].destination.activities.map((activity, index) => {
          return (
            <Marker
              key={index}
              coordinate={activity.coordinates}
              title={activity.name}
              image={require("../../assets/iconyellow.png")}
            />
          );
        })}

        {tripData.map((location) => {
          <MapViewDirections
            origin={location.coordinates}
            destination={location.destination.coordinates}
            strokeWidth={3}
            apikey="AIzaSyCaseJv5f2W66vmEZdWNC2X0sHa7yD9cOU"
            strokeColor="#FF0000"
          />;
        })}
      </MapView>
    );
  }
};
export default Map;
