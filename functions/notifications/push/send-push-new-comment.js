import { addEsteemPoints } from '../..';

const OneSignal = require('onesignal-node');

const client = new OneSignal.Client(
	process.env.ONESIGNAL_APP_ID,
	process.env.ONESIGNAL_REST_API_KEY
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req, res) => {
	const fromUserId = req.body.event.data.new.user_id;
	const targetUserId = req.body.event.data.new.target_user_id;
	const ideaId = req.body.event.data.new.idea_id;
	const id = req.body.event.data.new.id;
	const status = req.body.event.data.new.status;
	let isSuccess = false;

	if (fromUserId === targetUserId) return null;
	if (status !== 'APPROVED') return null;

	const message = {
		app_id: process.env.ONESIGNAL_APP_ID,
		en: 'text',
		contents: {
			en: 'You have received a new comment on your idea! 🚀   Click here to view it'
		},
		url: `https://app.founderpad.com/idea/${ideaId}?d=${id}`,
		channel_for_external_user_ids: 'push',
		include_external_user_ids: [targetUserId]
	};

	try {
		const response = await client.createNotification(message);
		res.status(200).send(
			'Push notification (new comment) sent successfully'
		);
	} catch (e) {
		if (e instanceof OneSignal.HTTPError) {
			// When status code of HTTP response is not 2xx, HTTPError is thrown.
			console.log(e.statusCode);
			console.log(e.body);
		}

		res.status(200).send('Failed to send push notification (new comment) ');
	}

	if (isSuccess) {
		res.status(200).send(
			'Push notification (new comment) sent successfully'
		);
	}

	res.status(500).send(
		error.message + ` --- Failed to send push notification (new comment)`
	);
};
