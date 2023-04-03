import axios from "axios"

const url = axios.create({baseURL: "https://maps.googleapis.com/maps/api/directions/"});


export const fetchMapRoute = (mainOrigin) => {
    return url
 .get("json?origin=${mainOrigin.latitude},${mainOrigin.longitude}&destination=${mainDestination.latitude},${mainDestination.longitude}&key=${apiKey}")
}



// mounted/render 
//call lthis function when 

//get data from server
//pull out markers
//