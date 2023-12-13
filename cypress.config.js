const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      })
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js',
    
  },
});
