const { dialogflow } = require('actions-on-google');
const app = dialogflow({ debug: true });

app.intent('Default', conv => {
    conv.ask("Can't help you here");
});

app.intent('Welcome', conv => {
    conv.ask('How are you?');
});

let response;

exports.awsDialogflow = app;

// USING dialogflow-fulfillment
/*
const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const { WebhookClient } = require('dialogflow-fulfillment');

const initializeAgent = (request, response) => {
    const agent = new WebhookClient({ request: request, response: response });
    let intentMap = new Map();
    intentMap.set('Welcome', a => {
        a.add('Welcome home');
    });
    agent.handleRequest(intentMap);
};

const server = awsServerlessExpress.createServer(
    (() => {
        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(awsServerlessExpressMiddleware.eventContext());

        app.all('*', (req, res) => {
            initializeAgent(req, res);
        });
        return app;
    })()
);

exports.awsDialogflow = (event, context) => {
    return awsServerlessExpress.proxy(server, event, context);
};
*/
