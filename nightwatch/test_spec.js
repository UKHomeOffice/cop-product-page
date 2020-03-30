const pageObjects = require("./pageData.object");
const pageAssertions = require("./pageAssertions.object");
const PageTimeout = require("./timeoutSettings");
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
      .pause(2500)
      .assert.containsText(pageObjects.homepage.title, pageAssertions.homepage.title);
  },

  "Open About COP": function(browser) {
    browser
      .useXpath()
      .waitForElementVisible(pageObjects.about.buttons.about_nav_button, getPageTimeout)
      .click(pageObjects.about.buttons.about_nav_button)
      .waitForElementVisible(pageObjects.about.titles.about_Cop_title, getPageTimeout)
      .pause(2500)
      .assert.containsText(pageObjects.about.titles.about_Cop_title, pageAssertions.about.about_Cop_title)
  },

    "Open Benefits of COP": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.about.buttons.benefits_nav_button, getPageTimeout)
        .click(pageObjects.about.buttons.benefits_nav_button)
        .waitForElementVisible(pageObjects.about.titles.benefits_title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.about.titles.benefits_title, pageAssertions.about.benefits_title)
    },

    "Open Use Cop": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.about.buttons.use_cop_nav_button, getPageTimeout)
        .click(pageObjects.about.buttons.use_cop_nav_button)
        .waitForElementVisible(pageObjects.about.titles.use_Cop_title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.about.titles.use_Cop_title, pageAssertions.about.use_Cop_title)
    },

    "Open RoadMap": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.about.buttons.roadmap_nav_button, getPageTimeout)
        .click(pageObjects.about.buttons.roadmap_nav_button)
        .waitForElementVisible(pageObjects.about.titles.roadmap_title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.about.titles.roadmap_title, pageAssertions.about.roadmap_title)
    },

    "Open Security": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.about.buttons.security_nav_button, getPageTimeout)
        .click(pageObjects.about.buttons.security_nav_button)
        .waitForElementVisible(pageObjects.about.titles.security_title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.about.titles.security_title, pageAssertions.about.security_title)
    },

    "Open Help": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.help_nav_button, getPageTimeout)
        .click(pageObjects.help.help_nav_button)
        .waitForElementVisible(pageObjects.help.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.title, pageAssertions.help.title)
        .end();
    }
};