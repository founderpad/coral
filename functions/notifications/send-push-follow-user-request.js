const OneSignal = require('onesignal-node');

var sendNotification = function (data) {
	var headers = {
		'Content-Type': 'application/json; charset=utf-8',
		Authorization: `Basic MzJjOWQ4OTctMTUyOC00ZmYzLTk5NjgtMDAwOTk0NTYzZjdi`
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
		app_id: 'c4cb5426-3957-47fb-bce2-f363d031aaa2',
		en: 'text',
		contents: {
			en: 'You have received a new follow request. Click here to view it.'
		},
		url: `https://app.founderpad.com/notifications`,
		include_external_user_ids: [followingId]
	};

	if (followerId !== followingId) sendNotification(message);
};
