# Actions-on-Google on different cloud function providers

All the functions in this project has been set up using each cloud providers default cli. An alternative to doing this is using something like the Serverless framework. In this experiment it made the most sense to do it the best documented and tested way possible.

1. [AWS Lambda](#aws-lambda)
2. [Azure Functions](#azure-functions)
3. [Google Cloud Functions](#google-cloud-functions)

## AWS Lambda

**Requirements:**
- Docker
- AWS cli
- AWS SAM cli

### Run locally
Run these commands
```
    cd aws-dialogflow/aws-dialogflow
    npm install
    cd ..
    sam local start-api
```
Test using postman:
http://127.0.0.1:3000/aws-dialogflow
Post body: 
```"{
  "responseId": "e9453cdc-32ab-4569-b8ef-3ddb3bcb3376",
  "queryResult": {
    "queryText": "hi",
    "action": "input.welcome",
    "parameters": {},
    "allRequiredParamsPresent": true,
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            ""
          ]
        }
      }
    ],
    "intent": {
      "name": "sdfsdf",
      "displayName": "Welcome"
    },
    "intentDetectionConfidence": 1,
    "languageCode": "en"
  },
  "originalDetectIntentRequest": {
    "payload": {}
  },
  "session": "dsfsfdfs"
}"
```

### Deploy
Create a storage bucket on AWS S3 for your function
```
sam package --template-file template.yaml --s3-bucket aws-dialogflowbucket --output-template-file packaged.yaml
```

Deploy the packaged function
```
sam deploy --template-file ./packaged.yaml --stack-name aws-dialogflow --capabilities CAPABILITY_IAM
```

## Azure functions
**Requirements:**
- Azure cli
- Azure core tools

### Run locally
Run this command:
```
cd azure-dialogflow
npm install
func host start
```

Test using postman:
http://localhost:7071/api/azure-dialogflow
Post body: 
```"{
  "responseId": "e9453cdc-32ab-4569-b8ef-3ddb3bcb3376",
  "queryResult": {
    "queryText": "hi",
    "action": "input.welcome",
    "parameters": {},
    "allRequiredParamsPresent": true,
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            ""
          ]
        }
      }
    ],
    "intent": {
      "name": "sdfsdf",
      "displayName": "Welcome"
    },
    "intentDetectionConfidence": 1,
    "languageCode": "en"
  },
  "originalDetectIntentRequest": {
    "payload": {}
  },
  "session": "dsfsfdfs"
}"
```

### Deploy
Create resource group
```
az group create --name azure-dialogflow --location westeurope
```

Create a storage for the function
```
az storage account create --name azuredialogflow --location westeurope --resource-group azure-dialogflow --sku Standard_LRS
```

Create a functionapp on Azure
```
az functionapp create --resource-group azure-dialogflow --consumption-plan-location westeurope --name azure-dialogflow --storage-account azuredialogflow --runtime node
```

Publish the function
```
func azure functionapp publish azure-dialogflow
```

## Google Cloud Functions

**Requirements:**
- Google Cloud Cli
- Google Cloud function emulator

### Run locally
Set a projectID for your function project and start the emulator
```
functions config set projectId YOUR_PROJECT_ID
functions start
```
Deploy function locally
```
functions deploy googleDialogflow --trigger-http
```
Test it with postman:
http://localhost:8010/YOUR_PROJECT_ID/us-central1/googleDialogflow

Post body: 
```"{
  "responseId": "e9453cdc-32ab-4569-b8ef-3ddb3bcb3376",
  "queryResult": {
    "queryText": "hi",
    "action": "input.welcome",
    "parameters": {},
    "allRequiredParamsPresent": true,
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            ""
          ]
        }
      }
    ],
    "intent": {
      "name": "sdfsdf",
      "displayName": "Welcome"
    },
    "intentDetectionConfidence": 1,
    "languageCode": "en"
  },
  "originalDetectIntentRequest": {
    "payload": {}
  },
  "session": "dsfsfdfs"
}"
```

### Deploy
```
gcloud functions deploy --runtime=nodejs8 --trigger-http
```
