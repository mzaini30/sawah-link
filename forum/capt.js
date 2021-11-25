import {driver}  from '../modul/init.js'
import {kumpulan}  from '../modul/olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from '../modul/jadi-link.js'

export default async function(){
	for (let x of kumpulan){
		await driver.get('https://mycapitol.captechu.edu/ICS/Campus_Life/Campus_Groups/CapVets/Discussion.jnz?portlet=Forums&screen=PostView&screenType=change&id=9156ca2d-057f-4b14-a15f-0a0613cb5764')

		await driver.executeScript(`document.querySelector('[aria-label="Go to Last page"]').click()`)

		const linknya = await driver.getCurrentUrl()

		const isiTeks = fs.readFileSync('./hasil.txt', 'utf8')
		fs.writeFileSync('./hasil.txt', `${isiTeks}\n${linknya}`)

		await driver.executeScript(`document.querySelector('[value="Reply"]').click()`)
		await driver.executeScript(`
			function cekEditor(){
				if (tinyMCE) {
					tinyMCE.activeEditor.setContent("Tulisan yang sangat bagus... ${jadiLink(x)}")
				} else {
					cekEditor()
				}
			}
			cekEditor()
		`)
		await driver.executeScript(`document.querySelector('[aria-label="Submit"]').click()`)
		await driver.sleep(Math.random() * 3000)
	}
}