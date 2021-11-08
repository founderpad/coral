const AWS = require('aws-sdk');

// const CONFIG = {
//     apiVersion: '2010-12-01',
//     accessKeyId: 'AKIAXAVHTNCXREX2LSFD',
//     secretAccessKey: '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',
//     region: 'eu-west-1'
// };

const CONFIG = {
	apiVersion: '2010-12-01',
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: 'eu-west-1'
};

// const CONFIG = AWS.config.lo
const AWS_SES = new AWS.SES(CONFIG);
// const AWS_SES = new AWS.SES({ apiVersion: '2010-12-01' });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req, res) => {
	await AWS_SES.sendEmail({
		Source: 'jamie@founderpad.com',
		Destination: {
			ToAddresses: ['jamie@founderpad.com']
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `<html>
                                <head></head>
                                <body>
                                    <p>Your ${req.body.event.data.new.type.toLowerCase()} has been reported for the following reason(s): ${
						req.body.event.data.new.reason
					}.</p>
                                    <p>We will carefully monitor this and take action if necessary.</p><br/>
                                    <strong>The founderpad team</strong>
                                </body>
                            </html>`
				}
			},
			Subject: {
				Charset: 'UTF-8',
				Data: `Your ${req.body.event.data.new.type.toLowerCase()} has been reported.`
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
