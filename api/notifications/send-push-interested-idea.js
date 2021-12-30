const OneSignal = require('onesignal-node');

// const sendNotification = async function (fromUserId, targetUserId) {
// 	const message = {
// 		en: 'text',
// 		contents: {
// 			en: 'Somebody is interested in your idea 🚀. <a href="http://localhost:3000/ideas?page=1">Click here to see who they are</a>'
// 		},
// 		include_external_user_ids: [targetUserId]
// 	};

// 	const client = new OneSignal.Client(
// 		'b40b7cc7-13dc-4662-8b48-efa668f9b72a',
// 		'YjI5OGM1ODctNGIyNi00NjIzLWFiYzctYzFkN2Q2ODJiMWYy'
// 	);

// 	try {
// 		const response = await client.createNotification(message);
// 		console.log(response.body.id);
// 	} catch (e) {
// 		if (e instanceof OneSignal.HTTPError) {
// 			// When status code of HTTP response is not 2xx, HTTPError is thrown.
// 			console.log(e.statusCode);
// 			console.log(e.body);
// 		}
// 	}
// };

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
	});

	req.write(JSON.stringify(data));
	req.end();
};

export default (req, res) => {
	const fromUserId = req.body.event.data.new.user_id;
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
