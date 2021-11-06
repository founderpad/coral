const AWS = require('aws-sdk');

const CONFIG = {
    apiVersion: '2010-12-01',
    accessKeyId: 'AKIAXAVHTNCXREX2LSFD',
    secretAccessKey: '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',
    region: 'eu-west-1'
};

const AWS_SES = new AWS.SES(CONFIG);

export default async(_req, _res) => {

    // const CONFIG = {
    //     apiVersion: '2010-12-01',
    //     accessKeyId: process.env.AWS_ACCESS_KEY,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    //     region: process.env.AWS_REGION
    // };

    AWS_SES.sendEmail({
        Source: 'jame@founderpad.com',
        Destination: {
            ToAddresses: [
                'jamie@founderpad.com'
            ]
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: 'Test email'
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Test subject'
            }
        }
    }).promise();
};