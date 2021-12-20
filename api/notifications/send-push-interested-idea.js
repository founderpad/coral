export default (req, res) => {
	console.log('req: ', req);
	// var message = {
	// 	app_id: '',
	// 	contents: { en: 'Somebody is interested in your idea 🚀' },
	// 	include_player_ids: []
	// };
	res.send('PUSH NOTIFICATION SUCCESSFULLY SENT!');
};
