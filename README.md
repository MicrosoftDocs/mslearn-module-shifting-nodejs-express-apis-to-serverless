---
page_type: sample
name: Refactor Node.js Express APIs into serverless Azure Functions APIs
languages:
- javascript, typescript
products:
- azure
- vs-code
- azure-functions
---

# ⚡Refactor Node.js Express APIs into serverless Azure Functions APIs

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/MicrosoftDocs/mslearn-module-shifting-nodejs-express-apis-to-serverless)

[![Refactor Node.js APIs Azure Functions](/resources/refactor-nodejs-azure-functions.png)](https://learn.microsoft.com/en-us/training/modules/shift-nodejs-express-apis-serverless/)

> This repository contains the source code for the [Refactor Node.js Express APIs into serverless Azure Functions APIs](https://learn.microsoft.com/en-us/training/modules/shift-nodejs-express-apis-serverless/) module.

## 💫 Overview

This project was created to help represent a fundamental app written with Node Express APIs and TypeScript that can be shifted to serverless functions with TypeScript.

The client-side (Front-end) app is `Angular`. However, it could just as easily be `Vue` or `React`. The `vacation` theme is used throughout the app.

by [John Papa](http://twitter.com/john_papa)

## 🔧 Technologies/Tools used
- ✅ **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=javascript-120166-gllemos)**
   - ✅ **[Visual Studio Code Extension Marketplace](https://marketplace.visualstudio.com/vscode)**
- ✅ **[Node.js](https://nodejs.org/)**
   - ✅ **[VS Code Extension for Node on Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=javascript-120166-gllemos)**
- ✅ **[TypeScript](https://www.typescriptlang.org/)**
- ✅ **[Angular](https://angular.io/)**
- ✅ **[Express.js](https://expressjs.com/)**
- ✅ **[Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=javascript-120166-gllemos)**
   - ✅ **[Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=javascript-120166-gllemos)**
   - ✅ **[Azure Functions extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=javascript-120166-gllemos)**
- ✅ **[Azure Free Trial](https://azure.microsoft.com/free/?WT.mc_id=javascript-120166-gllemos)**

## ❓Why

I love Node.js and Express.js for creating APIs! These require a server and paying for that server in the cloud. Shifting to serverless alleviates the cost of server upkeep, helps scale up and down easily, and reduces the surface area of the middleware required for a robust Express app. Is it perfect? No, of course not! But this is a solid option if these factors affect you.

## 🎯 Prerequisites

Make a copy of the `env.example` file named `.env`, in the root of the project. It should contain the following code.

`.env`

```bash
NODE_ENV=development
PORT=7070
WWW=./
```

## 🏁 Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/MicrosoftDocs/mslearn-module-shifting-nodejs-express-apis-to-serverless
   cd learn-functions
   ```

1. Install the npm packages

   ```bash
   npm install
   ```

1. Build the Node.js, Express.js and the Angular code

   ```bash
   npm run full:build
   ```

1. Run the app

   ```bash
   npm run node:start
   ```

## 🐞 Debug Node.js, Express.js and Angular

1. Stop any debugging sessions that may be currently running

1. Open `proxy.conf.json` and set the port to `7070`

1. Open the VS Code Command Palette `F1`

1. Type `View: Show Debug` and press `ENTER`

1. Select `Debug Express and Angular`

1. Press `F5`

1. Open the browser to <http://localhost:4200>

You may now set break points in the Express and Angular code.

## 🐞 Debug Functions and Angular

1. Stop any debugging sessions that may be currently running

1. Open `proxy.conf.json` and change the port to `7071`

1. Open the VS Code Command Palette `F1`

1. Type `View: Show Debug` and press `ENTER`

1. Select `Debug Functions and Angular`

1. Press `F5`

1. Open the browser to <http://localhost:4200>

You may now set break points in the Functions and Angular code.

## 🛑 Problems or Suggestions

[Open an issue here](/issues)

## 📚 Important Resources

- ✅ **[Documentation: Quickstart: Create a JavaScript function in Azure using Visual Studio Code](https://learn.microsoft.com/azure/azure-functions/create-first-function-vs-code-node?pivots=nodejs-model-v4&WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Documentation: Quickstart: Create a JavaScript function in Azure from the command line](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-node?tabs=windows%2Cazure-cli%2Cbrowser&pivots=nodejs-model-v4)**

- ✅ **[Documentation: Quickstart: Create a function in Azure with TypeScript using Visual Studio Code](https://learn.microsoft.com/azure/azure-functions/create-first-function-vs-code-typescript?pivots=nodejs-model-v4&WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Documentation: Quickstart: Create a TypeScript function in Azure from the command line](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-typescript?tabs=windows%2Cazure-cli%2Cbrowser&pivots=nodejs-model-v4)**

- ✅ **[Documentation: Deploy - Continuous delivery by using GitHub Actions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions?tabs=windows%2Cdotnet&pivots=method-manual)**

- ✅ **[Step by Step Guide: Migrating v3 to v4 programming model for Azure Functions for Node.Js Application](https://techcommunity.microsoft.com/t5/educator-developer-blog/step-by-step-guide-migrating-v3-to-v4-programming-model-for/ba-p/3897691?WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Visual Studio Code - macOS keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf?WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Visual Studio Code - Windows keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf?WT.mc_id=javascript-120166-gllemos)**


### 📚 Debugging Resources

- ✅ **[Debugging Angular in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/angular-tutorial?WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Debugging React in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial?WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Debugging Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial?WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Tasks in Visual Studio Code](https://code.visualstudio.com/Docs/editor/tasks?WT.mc_id=javascript-120166-gllemos)**

## ✍🏻 Next steps & Free Courses

Because learning is a never-ending journey, we want to help you as much as we can to get you ready for what's coming next. You'll find here a great collection of resources you can use to build your knowledge.

- ✅ **[Build a Node.js app for Azure Cosmos DB in Visual Studio Code](https://docs.microsoft.com/learn/modules/build-node-cosmos-app-vscode?WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Automate Node.js deployments with Azure Pipelines](https://docs.microsoft.com/learn/modules/deploy-nodejs/?WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Create serverless applications](https://learn.microsoft.com/training/paths/create-serverless-applications/?WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Authenticate users with Azure Static Web Apps](https://learn.microsoft.com/training/modules/publish-static-web-app-authentication/?WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Publish an API to Azure Static Web Apps](https://learn.microsoft.com/training/modules/publish-static-web-app-api-preview-url/?WT.mc_id=javascript-120166-gllemos)**

- ✅ **[Expand query and transaction functionality in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/training/modules/expand-query-transaction-functionality-azure-cosmos-db-sql-api/?WT.mc_id=javascript-120166-gllemos)**

## 💻 Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## ⚖️Legal Notices

Microsoft and any contributors grant you a license to the Microsoft documentation and other content
in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode),
see the [LICENSE](LICENSE) file, and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the
[LICENSE-CODE](LICENSE-CODE) file.

Microsoft, Windows, Microsoft Azure and/or other Microsoft products and services referenced in the documentation
may be either trademarks or registered trademarks of Microsoft in the United States and/or other countries.
The licenses for this project do not grant you rights to use any Microsoft names, logos, or trademarks.
Microsoft's general trademark guidelines can be found at http://go.microsoft.com/fwlink/?LinkID=254653.

Privacy information can be found at https://privacy.microsoft.com/en-us/

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents,
or trademarks, whether by implication, estoppel or otherwise.
