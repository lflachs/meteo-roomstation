const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getData = require("./service/meteoSensor");

setInterval(() => {
  const { temperature, humidity, date } = getData();
  prisma.meteoData.create({ data: { temperature, humidity } }).then(() => {
    console.log(date);
    console.log("Temperature:", readout.temperature.toFixed(1) + "C");
    console.log("Humidity:   ", readout.humidity.toFixed(1) + "%");
  });
}, 60000);
