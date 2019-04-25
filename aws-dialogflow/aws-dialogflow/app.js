// # Package SAM template
// sam package --template-file template.yaml --s3-bucket aws-dialogflowbucket --output-template-file packaged.yaml

// # Deploy packaged SAM template
// sam deploy --template-file ./packaged.yaml --stack-name aws-dialogflow --capabilities CAPABILITY_IAM

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
