import {driver, elemen}  from './init.js'
import {kumpulan}  from './olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'

export async function telegraph(){
	for (let x of kumpulan){
		const judulAcak = Math.random()

		await driver.get('https://telegra.ph/')

		x = x.split(' ').map(y => `<a href='${y}'>${y}</a>`).join(' ')

		await driver.executeScript(`document.querySelector('h1.empty').innerText = '${judulAcak}'`)
		await driver.executeScript(`document.querySelector('p.empty').innerHTML = "${x}"`)

		const publish = await elemen('#_publish_button')
		await publish.click()

		await driver.wait(until.urlContains((judulAcak + '').replace('.', '')));

		const linknya = await driver.getCurrentUrl()

		const isiTeks = fs.readFileSync('./hasil.txt', 'utf8')
		fs.writeFileSync('./hasil.txt', `${isiTeks}\n${linknya}`)

		await driver.sleep(Math.random() * 2000)
	}
}