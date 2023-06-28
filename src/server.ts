const express = require("express");
const { Signale } = require("signale");
const cors = require("cors");

const { productRouter } = require("./product/infrastructure/ProductRouter");

const app = express();

const signale = new Signale();

// Agregar middleware de CORS
app.use(cors());

app.use(express.json());
app.use("/alerts", productRouter);

app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
