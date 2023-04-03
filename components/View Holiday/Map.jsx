import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline'
import MapViewDirections from 'react-native-maps-directions';



const Map = () => {

  const [coordinates, setCoordinates] = useState([]);
  const [mainOrigin, setMainOrigin] = useState({ latitude: 51.5072, longitude: 0.1276 });
  const [mainDestination, setMainDestination] = useState({ latitude: 53.4808, longitude: -2.2426 });

      const testDataActivities = [
        {
          name: 'Albert Hall',
          address: '27 Peter St, Manchester M2 5QR',
          coordinates: { latitude: 53.4782844, longitude: -2.2478254 }
        },
        {
          name: '20 Stories',
          address: '1 Hardman Square, Manchester M3 3EB',
          coordinates: { latitude: 53.4790466, longitude: -2.251953 }
        },
        {
          name: 'Cloud 23',
          address: '303 Deansgate, Manchester M3 4LQ',
          coordinates: { latitude: 53.4752573, longitude: -2.250699 }
        },
        {
          name: 'The Refuge by Volta',
          address: 'Principal Manchester, Oxford St, Manchester M60 7HA',
          coordinates: { latitude: 53.4743127, longitude: -2.240365 }
        },
        {
          name: 'The Ivy Spinningfields',
          address: 'The Pavilion, Byrom St, Manchester M3 3HG',
          coordinates: { latitude: 53.479136, longitude: -2.2516295 }
        },
        {
          name: 'Menagerie',
          address: '1 New Bailey St, Manchester M3 5JL',
          coordinates: { latitude: 53.4817652, longitude: -2.2548198 }
        },
        {
          name: 'The Milton Club',
          address: '244 Deansgate, Manchester M3 4BQ',
          coordinates: { latitude: 53.4779428, longitude: -2.2499581 }
        },
        {
          name: 'The Comedy Store',
          address: 'Arches 3 & 4, Deansgate Locks, Whitworth St W, Manchester M1 5LH',
          coordinates: { latitude: 53.4746661, longitude: -2.2488365 }
        },
        {
          name: 'Revolution Deansgate Locks',
          address: '18-22 Lock St, Manchester M1 5LJ',
          coordinates: { latitude: 53.4807593, longitude: -2.2426305 }
        },
        {
          name: 'Gorilla',
           address: '54-56 Whitworth St W, Manchester M1 5WW',
          coordinates: { latitude: 53.4741552, longitude: -2.2425817 }
        }
      ]


      const tripData = [
        {
          title: "trip1",
          author: "fergus",
          startLocation: {
            city: "nottingham",
            coordinates: {              latitude: 53.954,              longitude: -1.4            },
          },
          destination: {
            city: "manchester", 
            coordinates: {              latitude: 50.5,              longitude: -4            },
            arrivalDate: "2023-04-04",
            departureDate: "2023-04-08",
            activities: [
              {
                name: "The Warehouse Project",
                address: "Mayfield Train Station, The Depot, Manchester M1 2QF",
                coordinates: {
                  lat: 53.4756,
                  lng: -2.2253,
                },
              },
              {
                name: "Hidden at Downtex Mill",
                address: "Mayfield Train Station, The Depot, Manchester M1 2QF",
                coordinates: {
                  lat: 53.4756,
                  lng: -2.2253,
                },
              },
            ],
          },
        },
      ];
       
    

      // useEffect(() => {
      //   const apiKey = 'AIzaSyAmempctutvUvlzRVCezRsSCCXeeYISRgk';
      //   const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${mainOrigin.latitude},${mainOrigin.longitude}&destination=${mainDestination.latitude},${mainDestination.longitude}&key=${apiKey}`;
    
      //   fetch(url)
      //     .then(response => response.json())
      //     .then(data => {
      //       const points = Polyline.decode(data.routes[0].overview_polyline.points);
      //       const coordinates = points.map(point => ({
      //         latitude: point[0],
      //         longitude: point[1],
      //       }));
      //       setCoordinates(coordinates);
      //     });
      // }, [mainOrigin, mainDestination]);

  return (
    <MapView style={{ flex: 1 }} >
       
      {tripData.map((item) => {
         return (
           <Marker
             key="test"
             coordinate={item.startLocation.coordinates}
             title="Test marker start location"
             />
         )
      })}

       {tripData.map((item) => {
         return (
           <Marker
             key="test"
             coordinate={item.destination.coordinates}
             title="Test marker end location"
             />
         )
      })}
        {testDataActivities.map((activity, index) => {
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
  origin={{latitude: 51, longitude: -0}}
  destination={{latitude: 53, longitude: -2}}
  apikey={AIzaSyAmempctutvUvlzRVCezRsSCCXeeYISRgk}
  strokeWidth={3}
  strokeColor="hotpink"
/>
<Polyline
  coordinates={this.state.coordinates}
  strokeWidth={2}
  strokeColor="blue"
/>

           <Polyline
    coordinates={[
      {latitude: 51, longitude: -0},
      {latitude: 53, longitude: -2},
    ]}
    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
    
    strokeWidth={2}
  />

      </MapView>


  );
}

export default Map;




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});