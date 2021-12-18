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
	                            <head>
									<style>
										@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
										body { font-family: 'Inter', sans-serif; }
										main {
											display: flex;
											flex-direction: column;
											flex: 1
										}
										#container {
											background-color: #F7FAFC;
											flex: 1;
											margin: 32px auto;
											padding: 32px;
											max-width: 600px;
										}
									</style>
								</head>
	                            <body>
									<main>
										// <img src="https://backend-19728797.nhost.app/storage/o/public/assets/founderpad-logo.svg" height="30" />
										<img src="https://backend-19728797.nhost.app/storage/o/public/assets/founderpad-logo200x41.png" />
										<div id="container">
											<h3>Hi ${req.body.event.data.new.display_name}, welcome to founderpad! 🎉 </h3>
											<p>
												We are really excited to have you on board, and hope you are just as excited as us at the prospect of
												getting feedback on your business ideas, innovating, and launching to the world. 🚀
											</p><br/>
										
										
											<h4>Getting started</h4>
											<p>
												Click <a href="http://www.founderpad.com/login" target="_blank" style="text-decoration: none;">here</a>
												to login and get started immediately. Network, post ideas and collaborate!
											</p>
											<br/>
										
											<h4>FAQs</h4>
											<p>
												If you have any questions, they may already be covered inside our FAQs <a href="https://www.founderpad.com/faqs" target="_blank" style="text-decoration: none;">here</a>.<br/><br/>
										
												Can't find an answer to what you're looking for? No problem!
												We're always keen to hear feedback on the platform and how we can improve it.<br/><br/>
										
												Feel free to email us here at <a href="mailto:countact@founderpad.com" target="_blank" style="text-decoration: none;">contact@founderpad.com</a> if you have any questions about the platform.
											</p><br/><br/>
										
											<p>We hope you enjoy what we have to offer, and look forward to the extensive updates we have coming in the future.</p><br/><br/>
										
											<strong>The founderpad team</strong>
										</div>
									</main>
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
