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

export default async (req, res) => {
	const fromUserId = req.body.event.data.new.user_id;
	const targetUserId = req.body.event.data.new.target_user_id;
	const ideaId = req.body.event.data.new.idea_id;

	if (fromUserId === targetUserId) return null;

	const message = {
		app_id: process.env.ONESIGNAL_APP_ID,
		en: 'text',
		contents: {
			en: 'Somebody is interested in your idea! 🚀  Click here to see who they are.'
		},
		url: `${process.env.SITE_URL}/idea/${ideaId}`,
		include_external_user_ids: [targetUserId]
	};

	sendNotification(message);
	// if (response)
	// 	res.status(200).send(
	// 		`nterested idea notification sent successfully to ${req.body.event.data.new.target_user_id}`
	// 	);
};
