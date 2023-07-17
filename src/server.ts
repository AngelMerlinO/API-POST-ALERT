const express = require("express");
const { Signale } = require("signale");
const cors = require("cors");

const { alertRouter } = require("./alert/infrastructure/AlertRouter");

const app = express();

const signale = new Signale();

// Agregar middleware de CORS
app.use(cors());

app.use(express.json());
app.use("/alerts", alertRouter);

app.listen(3001, () => {
  signale.success("Server online in port 3001");
});
