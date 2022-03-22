const AWS = require('aws-sdk');
import { Request, Response } from 'express';

const CONFIG = {
	apiVersion: '2010-12-01',
	accessKeyId: process.env.AWS_SDK_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SDK_SECRET_ACCESS_KEY,
	region: process.env.AWS_SDK_REGION
};

const AWS_SES = new AWS.SES(CONFIG);

export default async (req: Request, res: Response) => {
	await AWS_SES.sendEmail({
		Source: 'contact@founderpad.com',
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

	res.status(200).send('Reported email sent successfully');
};
