const AWS = require('aws-sdk');

const CONFIG = {
	apiVersion: '2010-12-01',
	accessKeyId: 'AKIAXAVHTNCXZV7KU356',
	secretAccessKey: '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',
	region: 'eu-west-1'
};

const AWS_SES = new AWS.SES(CONFIG);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req, res) => {
	AWS_SES.sendEmail({
		Source: 'jamie@founderpad.com',
		Destination: {
			ToAddresses: [`${req.body.event.data.new.recipient_email}`],
			// ToAddresses: ['success@simulator.amazonses.com'],
			BccAddresses: ['jamie@founderpad.com']
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `<html>
	                            <head></head>
	                            <body>
	                                <p>Hi ${req.body.event.data.new.recipient_name},</p>
	                            </body>
	                        </html>`
				}
			},
			Subject: {
				Charset: 'UTF-8',
				Data: `Your ${req.body.event.data.new.type.toLowerCase()} has been reported`
			}
		}
	}).promise();

	res.status(200).send('Email sent successfully');
};
