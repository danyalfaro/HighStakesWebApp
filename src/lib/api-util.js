exports.HOST = "https://api.weather.com";

exports.defaultParams = function () {
  return {
    qs: {
      // apiKey: process.env.WEATHER_API_KEY,
      apiKey: "320c9252a6e642f38c9252a6e682f3c6",
      language: "en-US",
    },
    headers: {
      "User-Agent": "Request-Promise",
      Accept: "application/json",
      gzip: true,
    },
    json: true, // parse the response as JSON
  };
};
