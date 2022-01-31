import OneSignal from 'onesignal-node';
import { Request, Response } from 'express';

// appId, apiKey in this order
const client = new OneSignal.Client(
	'c4cb5426-3957-47fb-bce2-f363d031aaa2',
	'MzJjOWQ4OTctMTUyOC00ZmYzLTk5NjgtMDAwOTk0NTYzZjdi'
);

var sendNotification = async function (message: any): Promise<boolean> {
	try {
		await client.createNotification(message);
		return true;
	} catch (error) {
		if (error instanceof OneSignal.HTTPError) {
			// When status code of HTTP response is not 2xx, HTTPError is thrown.
			console.log(error.statusCode);
			console.log(error.body);
		}
		return false;
	}
	// var headers = {
	// 	'Content-Type': 'application/json; charset=utf-8',
	// 	Authorization: `Basic YjI5OGM1ODctNGIyNi00NjIzLWFiYzctYzFkN2Q2ODJiMWYy`
	// };
	// var options = {
	// 	host: 'onesignal.com',
	// 	port: 443,
	// 	path: '/api/v1/notifications',
	// 	method: 'POST',
	// 	headers: headers
	// };
	// var https = require('https');
	// var req = https.request(options, function (res) {
	// 	res.on('data', function (data) {
	// 		console.log('Response:');
	// 		console.log(JSON.parse(data));
	// 	});
	// });
	// req.on('error', function (e) {
	// 	console.log('ERROR:');
	// 	console.log(e);
	// });
	// req.write(JSON.stringify(data));
	// req.end();
};

export default async (req: Request, res: Response) => {
	const targetUserId = req.body.event.data.new.target_user_id as string;
	const ideaId = req.body.event.data.new.idea_id as string;

	const message = {
		app_id: 'c4cb5426-3957-47fb-bce2-f363d031aaa2',
		en: 'text',
		contents: {
			en: 'Somebody is interested in your idea! 🚀  Click here to see who they are.'
		},
		url: `http://localhost:3000/idea/${ideaId}`,
		include_external_user_ids: [targetUserId]
	};

	const response = await sendNotification(message);
	if (response)
		res.status(200).send(
			`Push notification sent successfully to ${req.body.event.data.new.target_user_id}`
		);
};
