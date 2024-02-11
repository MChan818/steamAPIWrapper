const expressCsgo = require("express");
const csgoRouter = expressCsgo.Router();

var csgo = require("../controllers/csgo");

csgoRouter.get("/GetPlayerStats", csgo.getPlayerStats);


module.exports = csgoRouter;
