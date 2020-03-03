const homePageObject = require('../page-objects/homepage.object');
const homepageTitleText = 'Welcome to COP!';

module.exports = {
  'Launch website' : function (browser) {
    browser
      .url(browser.launchUrl)
      .useXpath()
      .waitForElementVisible(homePageObject.title)
      .assert.containsText(homePageObject.title, homepageTitleText)
      .end();
  }
};