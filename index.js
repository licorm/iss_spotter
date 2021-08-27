//require fetchip
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

//call fetchip
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

//call fetch coords
// fetchCoordsByIP('137.186.134.125', (error, coordinates) => {
//   if (error) {
//     console.log("it didn't work!", error);
//     return;
//   }
  
//   console.log('It worked! Coordinates: ', coordinates);
// });


// fetchISSFlyOverTimes ({ latitude: '51.0868', longitude: '-115.3504' }, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
  
//   console.log('It worked! Fly over times:', flyOverTimes);
// })


//{ latitude: 51.0868, longitude: -115.3504 }
