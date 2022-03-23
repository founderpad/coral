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
		Source: 'welcome@founderpad.com',
		Destination: {
			ToAddresses: [`${req.body.event.data.new.email}`],
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
									@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;500&display=swap');
									@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
									body { 
										font-family: 'Lato', sans-serif;
										display: flex;
										flex: 1;
										width: 100vw;
										justify-content: center;
										flex-direction: column;
										line-height: 200%;
									}
									p {
										line-height: 200%;
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
										max-width: 550px;
										display: flex;
										flex: 1;
										margin: 32px auto;
										background-color: white;
									}
									#inner-container {
										background-color: #F7FAFC;
										display: flex;
										flex: 1;
										margin: 32px auto;
										padding: 48px;
										max-width: 550px;
										flex-direction: column;
										border-collapse: separate;
										border-radius: 20px;
										border-top-left-radius: 0px;
										border-top-right-radius: 0px;
										border-top: 6px solid #2BA4C9;
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
									td {
										line-height: 170%;
										padding-bottom: 16px;
									}
									a {
										text-decoration: none;
									}
									button {
										all: unset;
										cursor: pointer;
										color: white;
										padding: 4px 16px;
										font-size: 0.9375rem;
										background-color: #2BA4C9;
										border-radius: 8px;
										width: 200px;
									}
									.socials a {
										margin-right: 8px;
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
													<td align="center" style="padding-bottom: 32px;">
														<h1>Welcome, ${req.body.event.data.new.display_name}!</h1>
														<h3 style="font-weight: normal; font-size: 1.125rem; margin-top: 8px;">We're delighted to have you on board</h3>
													</td>
													<tr>
														<td>
															<h3 style="font-weight: medium; margin-bottom: 16px;">Ready to get started?</h3>
															<table>
																<tr style="font-size: 0.9375rem;">
																	<td width="75" style="font-weight: bold;"><h3>Step 1</h3></td>
																	<td><h3 style="font-weight: normal">Post your idea and watch the feedback roll in</h3></td>
																</tr>
																<tr style="font-size: 0.9375rem;">
																	<td width="75" style="font-weight: bold;"><h3>Step 2</h3></td>
																	<td><h3 style="font-weight: normal">Collaborate with others and form your team</h3></td>
																</tr>
																<tr style="font-size: 0.9375rem;">
																	<td width="75" style="font-weight: bold;"><h3>Step 3</h3></td>
																	<td><h3 style="font-weight: normal">Build!</h3></td>
																</tr>
															</table>
														</td>
													</tr>
													<tr>
														<td align="center" style="padding-bottom: 32px;">
															<form>
																<button formaction="https://app.founderpad.com/login">Get started</button>
															</form>
														</td>
													</tr>
													<tr>
														<td>
															<h3 style="font-weight: medium;">FAQs</h3>
															<p>
																If you have any questions, please check our FAQs
																<a href="https://www.founderpad.com/faqs" target="_blank" style="text-decoration: none;">here</a>.<br/><br/>
																Can't find an answer to your question? You can contact us at 
																<a href="mailto:countact@founderpad.com" target="_blank" style="text-decoration: none;">contact@founderpad.com</a>
															</p>
														</td>
													</tr>
													<tr>
														<td>
															<h3 style="font-weight: medium;">Our development</h3>
															<p>
																This is our beta launch, and we have an extensive list of features and functionality that we will be
																adding to the site soon. If you think of anything that could be improved, or you would like to see added,
																fill in our Typeform
																<a href="https://hof63dkitgi.typeform.com/to/DYQnGCYY" target="_blank" style="text-decoration: none;">here</a>.
															</p>
														</td>
													</tr>
													<tr>
														<td style="padding-top: 48px; padding-bottom: 0px">
															<h2 style="padding-bottom: 16px;"><strong>The founderpad team</strong></h2>
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

	res.status(200).send('Welcome email sent successfully');
};
