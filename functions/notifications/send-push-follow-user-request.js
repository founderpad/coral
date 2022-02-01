const OneSignal = require('onesignal-node');

var sendNotification = function (data) {
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

	req.write(JSON.stringify(data));
	req.end();
};

export default (req, res) => {
	const followerId = req.body.event.data.new.follower_id;
	const followingId = req.body.event.data.new.following_id;

	const message = {
		app_id: process.env.ONESIGNAL_APP_ID,
		en: 'text',
		contents: {
			en: 'You have received a new follow request. Click here to view it.'
		},
		url: `${process.env.SITE_URL}/notifications`,
		include_external_user_ids: [followingId]
	};

	if (followerId !== followingId) sendNotification(message);
};
