const sensor = require("./sensor");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();

app.get("/data", async (req, res) => {
  const meteoData = await prisma.meteoData.findMany();
  res.json(meteoData);
});

app.get("/data/now", (req, res) => {
  const data = sensor.getData();
  res.json(data);
});

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
  const data = sensor.getData();
  console.log(data);
});
