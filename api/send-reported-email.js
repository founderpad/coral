
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
					Data: `<html>
								<head></head>
								<body>
									<p>Your ${req.body.event.data.new.type.toLowerCase()} has been reported for the following reason: ${req.body.event.data.new.reason}.</p>
									<p>We will carefully monitor this and take action if necessary.</p><br/>
									<strong>The founderpad team</strong>
								</body>
							</html>`
				}
		  	},
		  	Subject: {
				Charset: 'UTF-8',
				Data: `Your ${req.body.event.data.new.type.toLowerCase()} has been reported`,
		  	}
		},
	};

	return AWS_SES.sendEmail(params).promise();
};