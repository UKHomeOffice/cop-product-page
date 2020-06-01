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
    "Open Help Get started": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.get_started.button, getPageTimeout)
        .click(pageObjects.help.get_started.button)
        .waitForElementVisible(pageObjects.help.get_started.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.get_started.title, pageAssertions.help.get_started)
    },
    "Open OAR overview": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.oar.overview.button, getPageTimeout)
        .click(pageObjects.help.oar.overview.button)
        .waitForElementVisible(pageObjects.help.oar.overview.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.oar.overview.title, pageAssertions.help.oar.overview_title)
    },

    "Open OAR before you begin": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.oar.before_you_begin.button, getPageTimeout)
        .click(pageObjects.help.oar.before_you_begin.button)
        .waitForElementVisible(pageObjects.help.oar.before_you_begin.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.oar.before_you_begin.title, pageAssertions.help.oar.before_you_begin_title)
    },

    "Open OAR enter shift details and time": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.oar.enter_time_and_shift_details.button, getPageTimeout)
        .click(pageObjects.help.oar.enter_time_and_shift_details.button)
        .waitForElementVisible(pageObjects.help.oar.enter_time_and_shift_details.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.oar.enter_time_and_shift_details.title, pageAssertions.help.oar.enter_time_and_shift_details_title)
    },

    "Open OAR understand activity categories": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.oar.understand_activity_categories.button, getPageTimeout)
        .click(pageObjects.help.oar.understand_activity_categories.button)
        .waitForElementVisible(pageObjects.help.oar.understand_activity_categories.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.oar.understand_activity_categories.title, pageAssertions.help.oar.understand_activity_categories_title)
    },

    "Open OAR Detection/search activities": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.oar.detection_search_activities.button, getPageTimeout)
        .click(pageObjects.help.oar.detection_search_activities.button)
        .waitForElementVisible(pageObjects.help.oar.detection_search_activities.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.oar.detection_search_activities.title, pageAssertions.help.oar.detection_search_activities_title)
    },

    "Open OAR check OAR submission": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.oar.check_your_OAR_submission.button, getPageTimeout)
        .click(pageObjects.help.oar.check_your_OAR_submission.button)
        .waitForElementVisible(pageObjects.help.oar.check_your_OAR_submission.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.oar.check_your_OAR_submission.title, pageAssertions.help.oar.check_your_OAR_submission_title)
    },

    "Open MANDEC overview": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.mandec.overview.button, getPageTimeout)
        .click(pageObjects.help.mandec.overview.button)
        .waitForElementVisible(pageObjects.help.mandec.overview.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.mandec.overview.title, pageAssertions.help.mandec.overview_title)
    },

    "Open MANDEC add your line manager": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.mandec.add_your_line_manager.button, getPageTimeout)
        .click(pageObjects.help.mandec.add_your_line_manager.button)
        .waitForElementVisible(pageObjects.help.mandec.add_your_line_manager.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.mandec.add_your_line_manager.title, pageAssertions.help.mandec.add_your_line_manager_title)
    },

    "Open MANDEC if you have somethibng to declare": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.mandec.if_you_have_something_to_declare.button, getPageTimeout)
        .click(pageObjects.help.mandec.if_you_have_something_to_declare.button)
        .waitForElementVisible(pageObjects.help.mandec.if_you_have_something_to_declare.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.mandec.if_you_have_something_to_declare.title, pageAssertions.help.mandec.if_you_have_something_to_declare_title)
    },

    "Open MANDEC what line managers need to do": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.mandec.what_line_managers_need_to_do.button, getPageTimeout)
        .click(pageObjects.help.mandec.what_line_managers_need_to_do.button)
        .waitForElementVisible(pageObjects.help.mandec.what_line_managers_need_to_do.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.mandec.what_line_managers_need_to_do.title, pageAssertions.help.mandec.what_line_managers_need_to_do_title)
    },

    "Open UAF overview": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.uaf.overview.button, getPageTimeout)
        .click(pageObjects.help.uaf.overview.button)
        .waitForElementVisible(pageObjects.help.uaf.overview.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.uaf.overview.title, pageAssertions.help.uaf.overview_title)
    },

    "Open UAF before you begin": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.uaf.before_you_begin.button, getPageTimeout)
        .click(pageObjects.help.uaf.before_you_begin.button)
        .waitForElementVisible(pageObjects.help.uaf.before_you_begin.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.uaf.before_you_begin.title, pageAssertions.help.uaf.before_you_begin_title)
    },

    "Open UAF when you must report UAF": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.uaf.when_you_must_report_use_of_force.button, getPageTimeout)
        .click(pageObjects.help.uaf.when_you_must_report_use_of_force.button)
        .waitForElementVisible(pageObjects.help.uaf.when_you_must_report_use_of_force.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.uaf.when_you_must_report_use_of_force.title, pageAssertions.help.uaf.when_you_must_report_use_of_force_title)
    },

    "Open UAF personal Safety Training terms": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.uaf.personal_safety_training_terms.button, getPageTimeout)
        .click(pageObjects.help.uaf.personal_safety_training_terms.button)
        .waitForElementVisible(pageObjects.help.uaf.personal_safety_training_terms.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.uaf.personal_safety_training_terms.title, pageAssertions.help.uaf.personal_safety_training_terms_title)
    },

    "Open contact": function(browser) {
      browser
        .useXpath()
        .waitForElementVisible(pageObjects.help.contact.overview.button, getPageTimeout)
        .click(pageObjects.help.contact.overview.button)
        .waitForElementVisible(pageObjects.help.contact.overview.title, getPageTimeout)
        .pause(2500)
        .assert.containsText(pageObjects.help.contact.overview.title, pageAssertions.help.contact.overview_title)
    },
};