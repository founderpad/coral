// const AWS = require('aws-sdk');

// const CONFIG = {
// 	apiVersion: '2010-12-01',
// 	accessKeyId: 'AKIAXAVHTNCXZV7KU356',
// 	secretAccessKey: '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',
// 	region: 'eu-west-1'
// };

// const AWS_SES = new AWS.SES(CONFIG);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req, res) => {
	// await AWS_SES.sendEmail({
	// 	Source: 'contact@founderpad.com',
	// 	Destination: {
	// 		// ToAddresses: [`${req.body.event.data.new.recipient_email}`],
	// 		ToAddresses: [`jamie@founderpad.com`],

	// 		// ToAddresses: ['success@simulator.amazonses.com'],
	// 		BccAddresses: ['jamie@founderpad.com', 'toby@founderpad.com']
	// 	},
	// 	Message: {
	// 		Body: {
	// 			Html: {
	// 				Charset: 'UTF-8',
	// 				Data: `<html>
	//                             <head></head>
	//                             <body>
	//                                 <p>Hi Jamie,</p>
	//                                 <p>Your idea <i>"New ketchup"</i> has been reported for the following reason:
	//                                     <strong>Hate speech</strong>
	//                                 </p>
	//                                 <p>This will be carefully monitored and removed if deemed necessary.</p><br/>
	// 								Many thanks,<br/>
	//                                 <strong>The founderpad team</strong>
	//                             </body>
	//                         </html>`
	// 			}
	// 		},
	// 		Subject: {
	// 			Charset: 'UTF-8',
	// 			Data: `Your idea has been reported`
	// 		}
	// 	}
	// }).promise();

	res.status(200).send('Report email sent successfully');
};
