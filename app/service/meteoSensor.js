const sensorLib = require("node-dht-sensor");
const sensorType = 11; // 11 for DHT11, 22 for DHT22 and AM2302
const sensorPin = 4; // The GPIO pin number for sensor signal

if (!sensorLib.initialize(sensorType, sensorPin)) {
  console.warn("Failed to initialize sensor");
  process.exit(1);
}

function getData() {
  const readout = sensorLib.read();
  const temperature = readout.temperature;
  const humidity = readout.humidity;
  const now = new Date();
  return { temperature, humidity, date: now };
}

module.exports = { getData };
