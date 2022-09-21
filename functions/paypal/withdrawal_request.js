const AWS = require('aws-sdk');
import { Request, Response } from 'express';

const CONFIG = {
	apiVersion: '2010-12-01',
	accessKeyId: process.env.AWS_SDK_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SDK_SECRET_ACCESS_KEY,
	region: process.env.AWS_SDK_REGION
};

const AWS_SES = new AWS.SES(CONFIG);

export default async (req, res) => {
	await AWS_SES.sendEmail({
		Source: 'no-reply@founderpad.com',
		Destination: {
			ToAddresses: [`no-reply@founderpad.com`],
			// ToAddresses: ['success@simulator.amazonses.com'],
			BccAddresses: ['jamie@founderpad.com', 'toby@founderpad.com']
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `
						<html lang="en">
							<body>
								User ${req.body.event.data.new.email} has requested to withdraw their funds of ${req.body.event.data.new.amount}
							</body>
						</html>
					`
				}
			},
			Subject: {
				Charset: 'UTF-8',
				Data: `Withdrawal request for user: ${req.body.event.data.new.email}`
			}
		}
	}).promise();

	res.status(200).send('Withdrawal request email sent successfully');
};
