const express = require("express");
const path = require("path");
const chalk = require("chalk");
const cors = require("cors");
const app = express();
const PORT = 3001;
const router = require("./routes/index");

app.use(cors());
app.use("/api", router);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(chalk.blue(`Escuchando en puerto ${PORT}`)));
