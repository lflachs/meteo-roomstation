const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { getData } = require("./service/meteoSensor");
const app = express();

app.get("/data", async (req, res) => {
  const meteoData = await prisma.meteoData.findMany();
  res.json(meteoData);
});

app.get("/data/now", (req, res) => {
  const data = getData();
  res.json(data);
});

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
  const data = getData();
  console.log(data);
});
