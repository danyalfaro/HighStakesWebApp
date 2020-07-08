export function calculateStatus(forecast, localSensor) {
  let severityArray = [];
  localSensor.activeStakes.forEach((stake) => {
    let temperatureSeverity = calculateSeverity(
      Number(stake.temperature),
      Number(forecast.cityTemperature)
    );
    let humiditySeverity = calculateSeverity(
      Number(stake.humidity),
      Number(forecast.cityHumidity)
    );
    // console.log("TESTING, Stake.temperature: ", stake.temperature);
    let waterLevelSeverity = calculateSeverity(Number(stake.waterLevel), 0, 1);

    const stakeSeverity = {
      id: stake.id,
      temperatureSeverity: temperatureSeverity,
      humiditySeverity: humiditySeverity,
      waterLevelSeverity: waterLevelSeverity,
    };

    severityArray.push(stakeSeverity);
  });
  // console.log(severityArray);
  return severityArray;
}

//Threshold is optional since default is set to 2
function calculateSeverity(localSensorVal, forecastVal, threshold = 2) {
  if (Math.abs(localSensorVal - forecastVal) > threshold * 2) {
    return "ALERT";
  } else if (Math.abs(localSensorVal - forecastVal) > threshold) {
    return "WARNING";
  } else {
    return "STABLE";
  }
}
