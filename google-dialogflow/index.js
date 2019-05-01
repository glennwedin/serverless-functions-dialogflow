const { dialogflow } = require('actions-on-google');
const app = dialogflow({ debug: true });

app.intent('Default', conv => {
    conv.ask("Can't help you here");
});

app.intent('Welcome', conv => {
    conv.ask('How are you?');
});

exports.googleDialogflow = app;

// USING dialogflow-fulfillment
/*
const { WebhookClient } = require('dialogflow-fulfillment');

exports.googleDialogflow = async (request, response) => {
    const app = new WebhookClient({
        request,
        response
    });

    let intentMap = new Map();
    intentMap.set('Default', a => {
        a.add('Cant help you here');
    });
    intentMap.set('Welcome', a => {
        a.add('How are you?');
    });
    app.handleRequest(intentMap);

    return response;
};
*/
