import axios from "axios";

const db = axios.create({ baseURL: "http://localhost:8989/" });

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

        return data.activiti;
      })
      .catch((error) => console.log(error))
  );
};

export const geoCodeLocations = (params) => {
  console.log("here");
  return db
    .get("/api/trips/geoCodeActivities", { params: params })
    .then(({ data }) => {
      console.log(data.geoCodedLocations, "final cities");
      //   console.log(data.activities, "final activities");
      return data.geoCodedLocations;
    })
    .catch((error) => console.log(error));
};

export const geoCodeStops = (params) => {
  console.log("here");
  return db
    .get("/api/trips/geoCodeStops", { params: params })
    .then(({ data }) => {
      console.log(data, "data");
      //   console.log(data.activities, "activities");

      //   return data.items;
    })
    .catch((error) => console.log(error));
};
