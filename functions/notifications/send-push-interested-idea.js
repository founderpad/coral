// var sendNotification = function (message) {
// 	var headers = {
// 		'Content-Type': 'application/json; charset=utf-8',
// 		Authorization: `Basic Yjg0ODY2NmQtMjZmYS00ZmRiLWIzMTUtOWY1ZGJiOTc2YjY1`
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
// 		// throw new Error(`Failed to send push notification: ${e}`);
// 	});

// 	req.write(JSON.stringify(message));
// 	req.end();
// };

export default (req, res) => {
	// const fromUserId = req.body.event.data.new.user_id;
	// const targetUserId = req.body.event.data.new.target_user_id;
	// const ideaId = req.body.event.data.new.idea_id;

	// if (fromUserId === targetUserId) return null;

	// const message = {
	// 	app_id: 'a890c1f8-d682-4225-ae11-01f7cd717b84',
	// 	en: 'text',
	// 	contents: {
	// 		en: 'Somebody is interested in your idea! 🚀  Click here to see who they are.'
	// 	},
	// 	url: `https://app.founderpad.com/idea/${ideaId}`,
	// 	include_external_user_ids: [targetUserId]
	// };

	// sendNotification(message);
	// // if (response)
	// // 	res.status(200).send(
	// // 		`nterested idea notification sent successfully to ${req.body.event.data.new.target_user_id}`
	// // 	);

	res.status(200).send('Interested idea push notification sent successfully');
};
