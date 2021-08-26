//require fetchip
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

//call fetchip
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

//call fetch coords
fetchCoordsByIP('137.186.134.125', (error, coordinates) => {
  if (error) {
    console.log("it didn't work!", error);
    return;
  }
  
  console.log('It worked! Coordinates: ', coordinates);
});
