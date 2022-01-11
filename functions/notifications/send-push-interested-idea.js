// const OneSignal = require('onesignal-node');

var sendNotification = function (data) {
	var headers = {
		'Content-Type': 'application/json; charset=utf-8',
		Authorization: 'Basic YjI5OGM1ODctNGIyNi00NjIzLWFiYzctYzFkN2Q2ODJiMWYy'
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req, _res) => {
	// const fromUserId = req.body.event.data.new.user_id;
	const targetUserId = req.body.event.data.new.target_user_id;
	const ideaId = req.body.event.data.new.idea_id;

	// const message = createMessage(fromUserId, targetUserId);

	const message = {
		app_id: 'c4cb5426-3957-47fb-bce2-f363d031aaa2',
		en: 'text',
		contents: {
			en: 'Somebody is interested in your idea! 🚀 Click here to see who they are.'
		},
		url: `http://localhost:3000/idea/${ideaId}`,
		include_external_user_ids: [targetUserId]
	};

	sendNotification(message);
};