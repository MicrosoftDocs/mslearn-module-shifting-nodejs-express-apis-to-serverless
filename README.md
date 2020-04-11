# Refactor Node.js Express to Azure Functions

TypeScript Node/Express 👉TypeScript Serverless ➕ Angular

This project was created to help represent a fundamental app written with Node Express APIs and TypeScript that can be shifted to Serverless Functions with TypeScript.

The client app is Angular, however it could just as easily be Vue or React. The vacations theme is used throughout the app.

by [John Papa](http://twitter.com/john_papa)

## Why

I love Node and Express for creating APIs! These require a server and paying for that server in the cloud. Shifting to serverless alleviates the cost, the server upkeep, helps scale up and down easily, and reduces the surface area of the middleware required for a robust Express app. Is it perfect? No, of course not! But this is a solid option if these factors affect you.

## Prerequisites

Make a copy of the `env.example` file named `.env`, in the root of the project. It should contain the following code.

`.env`

```
NODE_ENV=development
PORT=7070
WWW=./
```

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/MicrosoftDocs/mslearn-module-shifting-nodejs-express-apis-to-serverless learn-functions
   cd learn-functions
   ```

1. Install the npm packages

   ```bash
   npm install
   ```

1. Build the Node Express and the Angular code

   ```bash
   npm run full:build
   ```

1. Run the app

   ```bash
   npm run node:start
   ```

## Debug Node Express and Angular

1. Stop any debugging sessions that may be currently running

1. Open `proxy.conf.json` and set the port to `7070`

1. Open the VS Code Command Palette `F1`

1. Type `View: Show Debug` and press `ENTER`

1. Select `Debug Express and Angular`

1. Press `F5`

1. Open the browser to <http://localhost:4200>

You may now set break points in the Express and Angular code.

## Debug Functions and Angular

1. Stop any debugging sessions that may be currently running

1. Open `proxy.conf.json` and change the port to `7071`

1. Open the VS Code Command Palette `F1`

1. Type `View: Show Debug` and press `ENTER`

1. Select `Debug Functions and Angular`

1. Press `F5`

1. Open the browser to <http://localhost:4200>

You may now set break points in the Functions and Angular code.

## Problems or Suggestions

[Open an issue here](/issues)

## Resources

- [Azure Free Trial](https://azure.microsoft.com/en-us/free/?wt.mc_id=expresstofunctions-github-jopapa)
- [VS Code](https://code.visualstudio.com?wt.mc_id=expresstofunctions-github-jopapa)
- [VS Code Extension for Node on Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=expresstofunctions-github-jopapa)
- [VS Code Extension Marketplace](https://marketplace.visualstudio.com/vscode?wt.mc_id=expresstofunctions-github-jopapa)
- [VS Code - macOS keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf?WT.mc_id=expresstofunctions-github-jopapa)
- [VS Code - Windows keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf?WT.mc_id=expresstofunctions-github-jopapa)
- Azure Functions [local.settings.json](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#local-settings-file?WT.mc_id=expresstofunctions-github-jopapa) file
- Tutorial to [Deploy to Azure Using Azure Functions](https://code.visualstudio.com/tutorials/functions-extension/getting-started?WT.mc_id=expresstofunctions-github-jopapa)

### Debugging Resources

- [Debugging Angular in VS Code](https://code.visualstudio.com/docs/nodejs/angular-tutorial?wt.mc_id=expresstofunctions-github-jopapa)
- [Debugging React in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial?wt.mc_id=expresstofunctions-github-jopapa)
- [Debugging Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial?wt.mc_id=expresstofunctions-github-jopapa)
- [Tasks in VS Code](https://code.visualstudio.com/Docs/editor/tasks?wt.mc_id=expresstofunctions-github-jopapa)
