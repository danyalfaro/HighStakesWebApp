const request = require("request-promise-native");

const dailyForecast = require("./daily-forecast");

const handleFail = function (err) {
  // API call failed...
  console.error(err.hasOwnProperty("message") ? err.message : err);
};

export const callDailyForecast = function (lat, lon) {
  let options = dailyForecast.requestOptions(lat, lon);
  request(options).then(dailyForecast.handleResponse).catch(handleFail);
};
