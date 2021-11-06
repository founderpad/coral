const AWS = require('aws-sdk');

export default (_req, res): any => {

    const CONFIG = {
        apiVersion: '2010-12-01',
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    };

    console.log('CUSTOM API')
	res.send('OKAY1')
};