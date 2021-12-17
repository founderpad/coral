const AWS = require('aws-sdk');

const CONFIG = {
	apiVersion: '2010-12-01',
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_DEFAULT_REGION
};

const AWS_SES = new AWS.SES(CONFIG);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req, res) => {
	AWS_SES.sendEmail({
		Source: 'jamie@founderpad.com',
		Destination: {
			// ToAddresses: [`${req.body.event.data.new.recipientEmail}`],
			ToAddresses: ['success@simulator.amazonses.com'],
			BccAddresses: ['jamie@founderpad.com']
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `<html>
	                            <head></head>
	                            <body>
	                                <p>Welcome to founderpad, ${req.body.event.data.new.display_name}. Great to have you aboard 😊</p>
	                                <p>
                                        Click <a href="http://localhost:3000/login" style="text-decoration: none;">here</a>
										to login and start creating your first idea, or by collaborating on others.
	                                </p><br/>

                                    <strong>The founderpad team</strong>
	                            </body>
	                        </html>`
				}
			},
			Subject: {
				Charset: 'UTF-8',
				Data: `Welcome to founderpad`
			}
		}
	}).promise();

	res.send('Email sent successfully');
};
