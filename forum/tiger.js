import {driver}  from '../modul/init.js'
import {kumpulan}  from '../modul/olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from '../modul/jadi-link.js'

export default async function(){
	for (let x of kumpulan){
		await driver.get('https://tiger.voorhees.edu/ICS/Campus_Life/Campus_Groups/martial_arts_tricking/Discussion.jnz?portlet=Forums&screen=PostView&screenType=change&id=251a02cb-d438-4f17-a843-5a8399f5e4be')

		await driver.executeScript(`document.querySelector('[aria-label="Go to Last page"]').click()`)

		const linknya = await driver.getCurrentUrl()

		const isiTeks = fs.readFileSync('./hasil.txt', 'utf8')
		fs.writeFileSync('./hasil.txt', `${isiTeks}\n${linknya}`)

		await driver.executeScript(`document.querySelector('[value="Reply"]').click()`)
		await driver.executeScript(`
			function cekEditor(){
				if (tinyMCE) {
					tinyMCE.activeEditor.setContent("halo semuanya... ini adalah forum yang sangat bagus... aku suka deh... ${jadiLink(x)}")
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