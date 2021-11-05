
const AWS = require('aws-sdk');

export default async (req, res) => {

	const CONFIG = {
		apiVersion: '2010-12-01',
		accessKeyId: 'AKIAXAVHTNCXREX2LSFD',
		secretAccessKey: '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',
		region: 'eu-west-1'
	};

	const AWS_SES = new AWS.SES(CONFIG);
	const params = {
		Source: 'jamie@founderpad.com',
		Destination: {
			ToAddresses: [
				'jamie@founderpad.com'
			],
		},
		// CcAddresses: [
		// 	'jamie@founderpad.com'
		// ],
		ReplyToAddresses: [],
		Message: {
		  	Body: {
				Html: {
			  		Charset: 'UTF-8',
			  		Data: 'YOU HAVE BEEN REPORTED FOR DELIVERING SUCH DELICIOUS DOUGHNUTS! (AUTOMATED EMAIL)'
				}
		  	},
		  	Subject: {
				Charset: 'UTF-8',
				Data: `Your ${req.body.event.data.new.type} has been reported`,
		  	}
		},
	};

	return AWS_SES.sendEmail(params).promise();
};