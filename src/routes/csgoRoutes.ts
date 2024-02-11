const expressCsgo = require("express");
const csgoRouter = expressCsgo.Router();

var csgo = require("../controllers/csgo");

// router.get("/", () => {});
csgoRouter.get("/GetPlayerStats", csgo.getPlayerStats);


module.exports = csgoRouter;
