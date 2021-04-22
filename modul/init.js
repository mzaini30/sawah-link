import webdriver  from 'selenium-webdriver'
import chrome  from 'selenium-webdriver/chrome.js'
import chromedriver  from 'chromedriver'
import fs from 'fs'

const ambilUserdata = fs.readFileSync('userdata.txt', 'utf8').trim()

let chromeoptions = new chrome.Options();
chromeoptions.addArguments("--start-maximized");
chromeoptions.addArguments(`--user-data-dir=${ambilUserdata}`);

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

export const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(chromeoptions).build()

export async function elemen(x){
	return await driver.findElement(webdriver.By.css(x))
}