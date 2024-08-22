const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
require('dotenv').config()
module.exports = defineConfig({
      //projectId: '------',
      viewportWidth: 1920,
      viewportHeight: 1080,
      e2e: {
            env: {
                  BASE_URL: process.env.BASE_URL,
            },
            //"watchForFileChanges": false,
            defaultCommandTimeout: 10000,
            testIsolation: false,
            scrollBehavior: false,
            chromeWebSecurity: false,
            hideXHRInCommandLog: true,
            experimentalRunAllSpecs: true,
            experimentalModifyObstructiveThirdPartyCode: true,
            watchForFileChanges: false,
            setupNodeEvents(on, config) {
                  allureWriter(on, config);
                  return config;
                  //To Use lighthouse
                  // //on("before:browser:launch", (browser = {}, launchOptions) => {
                  //   //prepareAudit(launchOptions);
                  // });
            },
      },
});