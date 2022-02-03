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
		Source: 'support@founderpad.com',
		Destination: {
			ToAddresses: [`${req.body.event.data.new.recipientEmail}`],
			// ToAddresses: ['success@simulator.amazonses.com'],
			BccAddresses: ['jamie@founderpad.com', 'toby@founderpad.com']
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `
						<html>
							<head>
								<style>
									@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
									body { 
										font-family: 'Inter', sans-serif;
										display: flex;
										flex: 1;
										width: 100vw;
										justify-content: center;
										flex-direction: column;
									}
									main {
										display: flex;
										flex-direction: column;
										align-items: center;
										flex: 1
									}
									header {
										display: flex;
										justify-content: center;
									}
									#outer-container {
										max-width: 700px;
										display: flex;
										flex: 1;
										margin: 32px auto;
										background-color: white;
									}
									#inner-container {
										background-color: #F7FAFC;;
										display: flex;
										flex: 1;
										margin: 32px auto;
										padding: 0 32px;
										max-width: 700px;
										flex-direction: column;
										border-collapse: separate;
										border-spacing: 0 24px;
									}
									#founderpadlogo {
										display: flex;
										justify-content: center;
									}
									th {
										display: flex;
										justify-content: center;
									}
									th > img {
										margin: 0 auto;
									}
									h2, h3 {
										margin-bottom: 0;
									}
								</style>
							</head>
							<body>
								<table id="outer-container">
									<th>
										<img src="https://founderpad-file-uploads.s3.eu-west-1.amazonaws.com/founderpad-logo-email-185x40.png" />
									</th>
									<tr>
										<td>
											<table id="inner-container">
												<tr>
													<td><h2>Hi ${req.body.event.data.new.display_name}, welcome to founderpad!</h2></td>
													<tr>
														<td>
															We are excited to have you on board, and we hope that you are just as excited at the prospect of getting valuable feedback on your business idea, 
															forming a team and launching a startup - all from the founderpad platform.
														</td>
													</tr>
													<tr>
														<td>
															<h3>
																Getting started
															</h3>
															<p>
																Click <a href="http://www.founderpad.com/login" target="_blank" style="text-decoration: none;">here</a>
																to login, get started, and post your first idea!
															</p>
														</td>
													</tr>
													<tr>
														<td>
															<h3>
																FAQs
															</h3>
															<p>
																If you have any questions, please check our FAQs
																<a href="https://www.founderpad.com/faqs" target="_blank" style="text-decoration: none;">here</a>.<br/>
																Can't find an answer to your question? You can email us at 
																<a href="mailto:countact@founderpad.com" target="_blank" style="text-decoration: none;">contact@founderpad.com</a>
															</p>
														</td>
													</tr>
													<tr>
														<td>
															<h3>
																Our Development
															</h3>
															<p>
																This is our beta launch, and we have an extensive list of features and functionality that we will be
																adding to the site soon. If you think of anything that could be improved, or you would like to see added,
																fill in our Typeform
																<a href="https://hof63dkitgi.typeform.com/to/DYQnGCYY" target="_blank" style="text-decoration: none;">here</a>.
															</p>
														</td>
													</tr>
													<tr>
														<td>
															Many thanks,<br/>
															<strong>The founderpad team</strong>
														</td>
													</tr>
												</tr>
											</table>
										</td>
									</tr> 
            					</table>
        					</body>
						</html>
					`
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
