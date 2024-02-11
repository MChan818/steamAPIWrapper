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
	getPlayerStats: (req: Request, res: Response, next: NextFunction) => {
		const steamid: string = req.query.steamids as string;
		const url: string = `https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${steamid}`;
		commonFetch(res, url);
	},
};
