const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

let chromeoptions = new chrome.Options();
chromeoptions.addArguments("--start-maximized");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(chromeoptions).build()

async function elemen(x){
	return await driver.findElement(webdriver.By.css(x))
}

module.exports = {driver, elemen}