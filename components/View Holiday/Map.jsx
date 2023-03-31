import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';

const london = { latitude: 51.5072, longitude: 0.1276 };
const manchester = { latitude: 53.4808, longitude: -2.2426 };
const windsorCastle = { latitude: 51.4839, longitude: 0.6044 };
const brighton = { latitude: 50.8, longitude: 0.1 };
const edinburgh = { latitude: 55.9, longitude: -3.1 };
const cardiff  = { latitude: 51.4, longitude: 3.1 };


const Map = () => {

      const testDataActivities = [
        {
          name: 'Albert Hall',
          address: '27 Peter St, Manchester M2 5QR',
          coordinates: { lat: 53.4782844, lng: -2.2478254 }
        },
        {
          name: '20 Stories',
          address: '1 Hardman Square, Manchester M3 3EB',
          coordinates: { lat: 53.4790466, lng: -2.251953 }
        },
        {
          name: 'Cloud 23',
          address: '303 Deansgate, Manchester M3 4LQ',
          coordinates: { lat: 53.4752573, lng: -2.250699 }
        },
        {
          name: 'The Refuge by Volta',
          address: 'Principal Manchester, Oxford St, Manchester M60 7HA',
          coordinates: { lat: 53.4743127, lng: -2.240365 }
        },
        {
          name: 'The Ivy Spinningfields',
          address: 'The Pavilion, Byrom St, Manchester M3 3HG',
          coordinates: { lat: 53.479136, lng: -2.2516295 }
        },
        {
          name: 'Menagerie',
          address: '1 New Bailey St, Manchester M3 5JL',
          coordinates: { lat: 53.4817652, lng: -2.2548198 }
        },
        {
          name: 'The Milton Club',
          address: '244 Deansgate, Manchester M3 4BQ',
          coordinates: { lat: 53.4779428, lng: -2.2499581 }
        },
        {
          name: 'The Comedy Store',
          address: 'Arches 3 & 4, Deansgate Locks, Whitworth St W, Manchester M1 5LH',
          coordinates: { lat: 53.4746661, lng: -2.2488365 }
        },
        {
          name: 'Revolution Deansgate Locks',
          address: '18-22 Lock St, Manchester M1 5LJ',
          coordinates: { lat: 53.4807593, lng: -2.2426305 }
        },
        {
          name: 'Gorilla',
           address: '54-56 Whitworth St W, Manchester M1 5WW',
          coordinates: { lat: 53.4741552, lng: -2.2425817 }
        }
      ]

       const testDataTrip = {
        title: "trip1",
        author: "fergus",
        startLocation: "nottingham",
        stops: {
          city: "manchester",
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
      }
      
      const markers = [
          { coordinate: london, title: "London" },
          { coordinate: manchester, title: "Manchester" },
          { coordinate: windsorCastle, title: "Windsor Castle" },
      ];

      const activityMarkers = [
          { coordinate: brighton, title: "Brighton Beach" },
          { coordinate: edinburgh, title: "Manchester" },
          { coordinate: cardiff, title: "Cardiff" },
      ];


  return (
    <MapView style={{ flex: 1 }} >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            image={require("../../assets/beachflag.png")}
          />
        ))}
    
        {activityMarkers.map((activity, index) => {
          <Marker
            key={index}
            coordinate={activity.coordinate}
            title={activity.title}
            /> 
         })}
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