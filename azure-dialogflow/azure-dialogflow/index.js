// Create resource group
// az group create --name azure-dialogflow --location westeurope

// Create storage
// az storage account create --name azuredialogflow --location westeurope --resource-group azure-dialogflow --sku Standard_LRS

// Create function app
// az functionapp create --resource-group azure-dialogflow --consumption-plan-location westeurope --name azure-dialogflow --storage-account azuredialogflow --runtime node

// publish
// func azure functionapp publish azure-dialogflow

const { dialogflow } = require('actions-on-google');
const app = dialogflow({ debug: true });

// test with azure core-tools
// func host start

app.intent('Default', conv => {
    conv.ask("Can't help you here");
});

app.intent('Welcome', conv => {
    conv.ask('How are you?');
});

module.exports = (context, request) => app(context.req, context.res);
