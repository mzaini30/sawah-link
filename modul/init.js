const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

const driver = new webdriver.Builder().forBrowser('chrome').build()

async function elemen(x){
	return await driver.findElement(webdriver.By.css(x))
}

module.exports = {driver, elemen}