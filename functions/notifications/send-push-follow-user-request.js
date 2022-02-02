const OneSignal = require('onesignal-node');

var sendNotification = function (data) {
	var headers = {
		'Content-Type': 'application/json; charset=utf-8',
		Authorization: `Basic Yjg0ODY2NmQtMjZmYS00ZmRiLWIzMTUtOWY1ZGJiOTc2YjY1`
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
		app_id: 'a890c1f8-d682-4225-ae11-01f7cd717b84',
		en: 'text',
		contents: {
			en: 'You have received a new follow request. Click here to view it.'
		},
		url: `https://app.founderpad.com/notifications`,
		include_external_user_ids: [followingId]
	};

	if (followerId !== followingId) sendNotification(message);
};
