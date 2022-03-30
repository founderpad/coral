var sendNotification = function (message) {
	var headers = {
		'Content-Type': 'application/json; charset=utf-8',
		Authorization: `Basic ${process.env.ONESIGNAL_REST_API_KEY}`
	};

	var options = {
		host: 'onesignal.com',
		port: 443,
		path: '/api/v1/notifications',
		method: 'POST',
		headers: headers
	};

	var https = require('https');
	var req = https.request(options, function (res) {
		res.on('data', function (data) {
			console.log('Response:');
			console.log(JSON.parse(data));
		});
	});

	req.on('error', function (e) {
		console.log('ERROR:');
		console.log(e);
		// throw new Error(`Failed to send push notification: ${e}`);
	});

	req.write(JSON.stringify(message));
	req.end();
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req, res) => {
	const fromUserId = req.body.event.data.new.user_id;
	const targetUserId = req.body.event.data.new.target_user_id;
	const ideaId = req.body.event.data.new.idea_id;
	const id = req.body.event.data.new.id;

	if (fromUserId === targetUserId) return null;

	const message = {
		app_id: process.env.ONESIGNAL_APP_ID,
		en: 'text',
		contents: {
			en: 'You have received a new comment on your idea. Click here to view it.'
		},
		url: `https://app.founderpad.com/idea/${ideaId}?d=${id}`,
		include_external_user_ids: [targetUserId]
	};

	sendNotification(message);
};
