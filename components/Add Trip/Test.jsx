// import { StatusBar } from "expo-status-bar";
// import React, {useState} from "react";
// import {View} from "react-native"
// import reactDom from "react-dom";


// const DestinationDetails = (( {formData, setFormData})=>{

//     const [stops, setStops] = useState(["Bangkok", "Chiang Mai", "Koh Phangan", "Phuket", "Koh Phi Phi"])


// const handleChange = (event) => {
//         const { name, value} = event.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }

//     const handleAdd = (event) => {
//         setStops(...stops, event.target.value)
//         console.log(stops)
//     }
//     return (
//         <View>
//         <div className="destination-details-form">
//             <p> Destination Details</p>
//             <label htmlFor="">Destination 1</label>
//             <input
//             value={formData[0].testDestinationOne} onChange={(event) => setFormData({...formData, testdestinationOne: event.target.value})}
//             type="text"
//             placeholder="First stop"></input>
//             <button 
//             type="submit"
//             onClick={(handleAdd)}>Add</button>
//             <br></br>
//             <label htmlFor="destinationOne">Destination 2</label>
//             <input
//             value={formData.destinationTwo} onChange={(event) => setFormData({...formData, destinationTwo: event.target.value})}
//             type="text"
//             placeholder="Next stop"></input>
//             <button>Add</button>
//             <br></br>
//             <label htmlFor="destinationThree">Destination 3</label>
//             <input
//             value={formData.destinationThree} onChange={(event) => setFormData({...formData, destinationThree: event.target.value})}
//             type="text"
//             placeholder="Next stop"></input>
//             <button>Add</button>
//             <br></br>
//             <label htmlFor="destinationFour">Destination 4</label>
//             <input
//             value={formData.destinationFour} onChange={(event) => setFormData({...formData, destinationFour: event.target.value})}
//             type="text"
//             placeholder="Next stop"></input>
//             <button>Add</button>
//             <br>
            
//             </br>
//             <label htmlFor="destinationFive">Destination 5</label>
//             <input
//             value={formData.destinationFive} onChange={(event) => setFormData({...formData, destinationFive: event.target.value})}
//             type="text"
//             placeholder="Next stop"></input>
//             <button>Add</button>
//         <pre>
//             {JSON.stringify(formData)}
//         </pre>
//         </div>
//         </View>