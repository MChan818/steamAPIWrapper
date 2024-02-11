import { AxiosError, AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";

const axios = require("axios");

const commonFetch = (res: Response, url: string) => {
	axios
		.get(url)
		.then((response: AxiosResponse) => {
			res.status(response.status);
			res.send(JSON.stringify(response.data));
		})
		.catch((error: AxiosError) => {
			if (error.status) {
				res.status(error.status).send(error.message);
			} else {
				res.send(error.message);
			}
		});
};

module.exports = {
	getNewsForApp: (req: Request, res: Response, next: NextFunction) => {
		const appid: string = req.query.appid as string;
		const url: string = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=3&maxlength=300&format=json`;
		commonFetch(res, url);
	},
	getPlayerSummaries: (req: Request, res: Response, next: NextFunction) => {
		const steamids: string = req.query.steamids as string;
		const url: string = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${steamids}`;
		commonFetch(res, url);
	},
	getPlayerFriendList: (req: Request, res: Response, next: NextFunction) => {
		const steamid: string = req.query.steamid as string;
		if (!steamid) {
			res.send("steamid not provided");
		}
		const url: string = `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamid}&relationship=friend`;
		commonFetch(res, url);
	},
	getPlayerAchievements: (req: Request, res: Response, next: NextFunction) => {
		const steamid: string = req.query.steamid as string;
		const appid: string = req.query.appid as string;
		if (!steamid || !appid) {
			res.send("not all queries were provided");
		}
		const url: string = `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamid}&appid=${appid}`;
		commonFetch(res, url);
	},
	getPlayerOwnedGames: (req: Request, res: Response, next: NextFunction) => {
		const steamid: string = req.query.steamid as string;
		if (!steamid) {
			res.send("not all queries were provided");
		}
		const url: string = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamid}&format=json`;
		commonFetch(res, url);
	},
	getPlayerRecentlyPlayedGames: (req: Request, res: Response, next: NextFunction) => {
		const steamid: string = req.query.steamid as string;
		if (!steamid) {
			res.send("not all queries were provided");
		}
		const url: string = ` http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamid}&format=json`;
		commonFetch(res, url);
	},
	getUserStatsForGame: (req: Request, res: Response, next: NextFunction) => {
		const steamid: string = req.query.steamid as string;
		const appid: string = req.query.appid as string;
		if (!steamid || !appid) {
			res.send("not all queries were provided");
		}
		const url: string = `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?key=${process.env.STEAM_API_KEY}&steamid=${steamid}&appid=${appid}`;
		commonFetch(res, url);
	},
};
