require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { PORT } = require("./src/config");
const routes = require("./src/routes");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
