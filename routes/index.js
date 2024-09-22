const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// route to handle getting all items
router.get("/items", itemController.getItems);

module.exports = router;
