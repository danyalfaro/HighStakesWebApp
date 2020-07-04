//
//  * Daily Forecast
//  *
//  * [ Base URL: api.weather.com/v3 ]

// /swagger-docs/sun/v3/sunV3CurrentsOnDemand.json

// The Weather Current Conditions are generated on demand from The Weather Company (TWC) Currents On Demand (COD) system.
// The COD data feed returns a similar set of data elements as traditional site-based observations. The API provides
// information on temperature, precipitation, wind, barometric pressure, visibility, ultraviolet (UV) radiation, and other
// related weather observations elements as well as date/time, weather icon codes and phrases. The COD is gridded across
// the globe at a 4KM geocode resolution.

//  *
//  * Base URL: https://api.weather.com/v3
//  * Endpoint: /wx/observations/current?geocode=33.74%2C-84.39&units=e&language=en-US&format=json
//  *
//

const apiUtil = require("./api-util");

const requestOptions = function (lat, lon) {
  let options = apiUtil.defaultParams();

  options[
    "uri"
  ] = `https://cors-anywhere.herokuapp.com/${apiUtil.HOST}/v3/wx/observations/current?geocode=${lat}%2C${lon}&units=e&language=en-US&format=json`;
  return options;
};

const handleResponse = function (res) {
  if (res) {
    return res;
  } else {
    console.log("no info returned");
  }
};

const request = require("request-promise-native");

const handleFail = function (err) {
  // API call failed...
  console.error(err.hasOwnProperty("message") ? err.message : err);
};

export const callCurrentWeather = async function (lat, lon) {
  let options = requestOptions(lat, lon);
  try {
    const res = await request(options);
    return handleResponse(res);
  } catch (err) {
    return handleFail(err);
  }
};
