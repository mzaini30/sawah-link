const {driver, elemen} = require('./init')
const {kumpulan} = require('./olah-data')
const fs = require('fs')
const copy = require('copy-text-to-clipboard')

async function telegraph(){
	for (let x of kumpulan){
		copy(x)
		await driver.get('https://telegra.ph/')

		const judul = await elemen('h1.empty')
		await judul.click()
		await judul.sendKeys(Math.random() * 1000)

		const isi = await elemen('p.empty')
		await isi.click()
		await isi.sendKeys(Key.CONTROL, 'v')
		// await isi.sendKeys(x)

		const publish = await elemen('#_publish_button')
		await publish.click()

		await driver.sleep(5000)

		const linknya = await driver.getCurrentUrl()

		const isiTeks = fs.readFileSync('./hasil.txt', 'utf8')
		fs.writeFileSync('./hasil.txt', `${isiTeks}\n${linknya}`)

		await driver.sleep(Math.random() * 5000)
	}
}

module.exports = {telegraph}