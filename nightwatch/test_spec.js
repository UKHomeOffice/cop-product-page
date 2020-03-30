const pageObjects = require("./pageData.object");
const pageAssertions = require("./pageAssertions.object");
const PageTimeout = require("timeoutSettings.config.STEPTIMEOUT");
const getPageTimeout = PageTimeout.config.STEPTIMEOUT;
  module.exports = {
  before: function(browser) {
    console.log("Setting up...");
    browser.url(browser.launch_url);
  },

  after: function(browser) {
    console.log("Closing down...");
  },

  "Open Homepage": function(browser) {
    browser
      .useXpath()
      .waitForElementVisible(pageObjects.homepage.title, getPageTimeout)
      .assert.containsText(pageObjects.homepage.title, pageAssertions.homepage.title);
  },

  // "Open About": function(browser) {
  //   browser
  //     .useXpath()
  //     .waitForElementVisible(pageObjects.title, 30000)
  //     .assert.containsText(pageObjects.title, homepageTitleText)
  //     .end();
  // }
};