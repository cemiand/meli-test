const express = require("express");
const router = express.Router();

const itemsRoutes = require("./items");

router.use("/items", itemsRoutes);

module.exports = router;
