const express = require("express");
const router = express.Router();
const { getItems, getOneItem } = require("../controllers/items");

router.get("/", getItems);
router.get("/:id", getOneItem);

module.exports = router;
