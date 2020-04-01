const homePageObject = require('../page-objects/homepage.object');
const homepageTitleText = 'Welcome to COP!';

module.exports = {
  'Launch website' : function (browser) {
    browser
      .url(browser.launch_dev_url)
      .useXpath()
      .waitForElementVisible(homePageObject.title)
      .assert.containsText(homePageObject.title, homepageTitleText)
      .end();
  }
};