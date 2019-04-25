'use strict';

/*
Deploy: 
gcloud functions deploy --runtime=nodejs8 --trigger-http

Invoke:
gcloud functions call googleDialogflow --data '{"responseId":"e9453cdc-32ab-4569-b8ef-3ddb3bcb3376","queryResult":{"queryText":"hi","action":"input.welcome","parameters":{},"allRequiredParamsPresent":true,"fulfillmentMessages":[{"text":{"text":[""]}}],"intent":{"name":"projects/capquiz-4e079/agent/intents/04f31bbb-6c19-48ff-b5bb-f7eb47b6261e","displayName":"Welcome"},"intentDetectionConfidence":1,"languageCode":"en"},"originalDetectIntentRequest":{"payload":{}},"session":"projects/capquiz-4e079/agent/sessions/dfde3ade-87ac-f4b8-b063-9cfdaf688688"}'
*/

const { dialogflow } = require('actions-on-google');
const app = dialogflow({ debug: true });

app.intent('Default', conv => {
    conv.ask("Can't help you here");
});

app.intent('Welcome', conv => {
    conv.ask('How are you?');
});

exports.googleDialogflow = app;
