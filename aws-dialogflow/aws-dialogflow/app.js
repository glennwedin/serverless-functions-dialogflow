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
