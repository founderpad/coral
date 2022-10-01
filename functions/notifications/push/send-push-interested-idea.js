const OneSignal = require('onesignal-node');

const client = new OneSignal.Client(
	process.env.ONESIGNAL_APP_ID,
	process.env.ONESIGNAL_REST_API_KEY
);

export default async (req, res) => {
	const fromUserId = req.body.event.data.new.user_id;
	const targetUserId = req.body.event.data.new.target_user_id;
	const ideaId = req.body.event.data.new.idea_id;

	if (fromUserId === targetUserId) return null;

	const message = {
		app_id: process.env.ONESIGNAL_APP_ID,
		contents: {
			en: 'Somebody is interested in your idea! 🚀   Click here to see who they are'
		},
		url: `https://app.founderpad.com/idea/${ideaId}`,
		channel_for_external_user_ids: 'push',
		include_external_user_ids: [targetUserId]
	};

	try {
		const response = await client.createNotification(message);
		// console.log(response.body.id);
		res.status(200).send(
			'Push notification (interested idea) sent successfully'
		);
	} catch (e) {
		if (e instanceof OneSignal.HTTPError) {
			// When status code of HTTP response is not 2xx, HTTPError is thrown.
			console.log(e.statusCode);
			console.log(e.body);
		}

		res.status(200).send(
			'Failed to send push notification (interested idea)'
		);
	}
};

// var sendNotification = async function (message) {
// 	var headers = {
// 		'Content-Type': 'application/json; charset=utf-8',
// 		Authorization: 'Basic Yjg0ODY2NmQtMjZmYS00ZmRiLWIzMTUtOWY1ZGJiOTc2YjY1'
// 	};

// 	var options = {
// 		host: 'onesignal.com',
// 		port: 443,
// 		path: '/api/v1/notifications',
// 		method: 'POST',
// 		headers: headers
// 	};

// 	var https = require('https');
// 	var req = https.request(options, function (res) {
// 		res.on('data', function (data) {
// 			console.log('Response:');
// 			console.log(JSON.parse(data));
// 		});
// 	});

// 	req.on('error', function (e) {
// 		console.log('ERROR:');
// 		console.log(e);
// 	});

// 	req.write(JSON.stringify(message));
// 	req.end();
// };

// export default (req, res) => {
// 	const fromUserId = req.body.event.data.new.user_id;
// 	const targetUserId = req.body.event.data.new.target_user_id;
// 	const ideaId = req.body.event.data.new.idea_id;

// 	if (fromUserId === targetUserId) return null;

// 	const message = {
// 		app_id: 'a890c1f8-d682-4225-ae11-01f7cd717b84',
// 		en: 'text',
// 		contents: {
// 			en: 'Somebody is interested in your idea! 🚀   Click here to see who they are'
// 		},
// 		url: `https://app.founderpad.com/idea/${ideaId}`,
// 		channel_for_external_user_ids: 'push',
// 		include_external_user_ids: [targetUserId]
// 	};

// 	sendNotification(message);
// };
