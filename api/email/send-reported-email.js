const AWS = require('aws-sdk');

const CONFIG = {
	apiVersion: '2010-12-01',
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_DEFAULT_REGION
};

const AWS_SES = new AWS.SES(CONFIG);

export default async (req, res) => {
	await AWS_SES.sendEmail({
		Source: 'jamie@founderpad.com',
		Destination: {
			ToAddresses: [`jamie@founderpad.com`]
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `<html>
                                <head></head>
                                <body>
                                    <p>Hi ${
										req.body.event.data.new.recipientName
									},</p>
                                    <p>Your ${req.body.event.data.new.type.toLowerCase()} has been reported for the following reason:
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

	// console.log('promsie response: ', emailResponse.$response )
	// emailResponse.then(
	//     function (error) {
	//         res.send(error.)
	//     }
	// )

	res.send('Email sent successfully');
};
