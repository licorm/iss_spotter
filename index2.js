//import
const {fetchMyIP} = require('./iss_promised');
const {fetchCoordsByIP} = require('./iss_promised');
const {fetchISSFlyOverTimes} = require('./iss_promised');
const {nextISSTimesForMyLocation} = require('./iss_promised');

//call function
nextISSTimesForMyLocation()
  .then((times) => {
    console.log(times);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

