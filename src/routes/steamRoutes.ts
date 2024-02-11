const expressSteam = require("express");
const steamRouter = expressSteam.Router();

var players = require("../controllers/players");

steamRouter.get("/GetNewsForApp", players.getNewsForApp);
steamRouter.get("/GetPlayerSummaries", players.getPlayerSummaries);
steamRouter.get("/GetPlayerFriendList", players.getPlayerFriendList);
steamRouter.get("/GetPlayerAchievements", players.getPlayerAchievements);
steamRouter.get("/GetPlayerOwnedGames", players.getPlayerOwnedGames);
steamRouter.get("/GetPlayerRecentlyPlayedGames", players.getPlayerRecentlyPlayedGames);
steamRouter.get("/GetUserStatsForGame", players.getUserStatsForGame);

module.exports = steamRouter;
