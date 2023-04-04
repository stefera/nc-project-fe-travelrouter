import axios from "axios";

const db = axios.create({ baseURL: "http://localhost:8999/" });

export const fetchActivites = (params) => {
  console.log("here");
  return (
    db
      .get("/api/trips/trip1/makePreferences", {
        params: params,
      })
      //db.get("/api/trips/trip1/makePreferences")
      .then(({ data }) => {
        console.log(data, "data");
        console.log(data.activities, "activities");

        return data.activities;
      })
      .catch((error) => console.log(error))
  );
};

export const geoCodeLocations = (params) => {
  const cities = params;
  console.log(cities);
  return db
    .get("/api/trips/geoCodeActivities", { params: cities })
    .then(({ data }) => {
      console.log(data.geoCodedLocations, "final cities");
      return data.geoCodedLocations;
    })
    .catch((error) => console.log(error));
};

export const postTrip = (params) => {
  console.log("here, posttrip");
  return (
    db
      .post("/api/trips/", {
        params: params,
      })
      //db.get("/api/trips/trip1/makePreferences")
      .then(({ data }) => {
        console.log(data, "data in postTrip");
        return data;

        // return data.activities;
      })
      .catch((error) => console.log(error))
  );
};

// export const geoCodeStops = (params) => {
//   console.log("here");
//   return db
//     .get("/api/trips/geoCodeStops", { params: params })
//     .then(({ data }) => {
//       console.log(data, "data");
//       //   console.log(data.activities, "activities");

//       //   return data.items;
//     })
//     .catch((error) => console.log(error));
// };
