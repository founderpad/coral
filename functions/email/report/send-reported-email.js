const AWS = require('aws-sdk');

const CONFIG = {
	apiVersion: '2010-12-01',
	accessKeyId: 'AKIAXAVHTNCXREX2LSFD',
	secretAccessKey: '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',
	region: 'eu-west-1'
};

const AWS_SES = new AWS.SES(CONFIG);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req, res) => {
	AWS_SES.sendEmail({
		Source: 'jamie@founderpad.com',
		Destination: {
			ToAddresses: [`${req.body.event.data.new.recipientEmail}`],
			// ToAddresses: ['success@simulator.amazonses.com'],
			BccAddresses: ['jamie@founderpad.com', 'toby@founderpad.com']
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `<html>
	                            <head></head>
	                            <body>
	                                <p>Hi ${
										req.body.event.data.new.recipient_name
									},</p>
	                                <p>Your ${req.body.event.data.new.type.toLowerCase()} <i>"${
						req.body.event.data.new.content
					}"</i> has been reported for the following reason:
	                                    <strong>${
											req.body.event.data.new.reason
										}</strong>
	                                </p>
	                                <p>We will carefully monitor this and, if necessary, will remove this ${req.body.event.data.new.type.toLowerCase()}.</p><br/>
	                                <strong>The founderpad team</strong>
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

	// await AWS_SES.sendEmail({
	// 	Source: 'jamie@founderpad.com',
	// 	Destination: {
	// 		// ToAddresses: [`${req.body.event.data.new.recipientEmail}`],
	// 		ToAddresses: ['success@simulator.amazonses.com'],
	// 		BccAddresses: ['jamie@founderpad.com']
	// 	},
	// 	Message: {
	// 		Subject: {
	// 			Charset: 'UTF-8',
	// 			Data: `Your ${req.body.event.data.new.type.toLowerCase()} has been reported`
	// 		},
	// 		Body: {
	// 			Html: {
	// 				Charset: 'UTF-8',
	// 				Data: 'Test email'
	// 			}
	// 		}
	// 	}
	// }).promise();

	res.send('Email sent successfully');
};
