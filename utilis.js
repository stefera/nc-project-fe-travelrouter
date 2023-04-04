import axios from "axios";

const db = axios.create({ baseURL: "http://localhost:8999/" });

export const fetchActivites = (params) => {
  console.log("here");
  return db
    .get("/api/trips/trip1/makePreferences", {
      params: params,
    })
    .then(({ data }) => {
      // console.log(data, "data");
      // console.log(data.activities, "activities");

      return data.activities;
    })
    .catch((error) => console.log(error));
};

export const geoCodeLocations = (params) => {
  //console.log("here in utils", params);
  return db
    .get("/api/trips/geoCodeActivities", { params: params })
    .then(({ data }) => {
      console.log(data.geoCodedLocations, "final cities");
      return data.geoCodedLocations;
    })
    .catch((error) => console.log(error));
};

export const postTrip = (params) => {
  //console.log("here, posttrip");
  return (
    db
      .post("/api/trips/", {
        params: params,
      })
      //db.get("/api/trips/trip1/makePreferences")
      .then(({ data }) => {
        //console.log(data, "data in postTrip");
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

export const fetchAllHolidays = (params) => {
  console.log(">> fetchAllHolidays called");
  return db
    .get("/api/trips", { params: params })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => console.log(error));
};

export const fetchTripById = (id) => {
  //console.log(params, "<< params");
  // destructure from paras here
  let path = `/api/trips/${id}`;
  return db
    .get(path)
    .then(({ data }) => {
      console.log(data.trip, "<< data.trip in fetchTripById");
      return data.trip;
    })
    .catch((error) => console.log(error));
};
