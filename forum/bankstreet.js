import {driver}  from '../modul/init.js'
import {kumpulan}  from '../modul/olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from '../modul/jadi-link.js'

export default async function(){
	for (let x of kumpulan){
		await driver.get('https://my.bankstreet.edu/ICS/Campus_Life/Campus_Groups/Child_Life_Program/Group_Collaboration.jnz?portlet=%5BICS%5D_ForumPortlet&screen=PostView&screenType=change&id=c8f7a303-f7cc-42e7-bbd1-b6c794f9dd29')

		await driver.executeScript(`document.querySelector('[aria-label="Go to Last page"]').click()`)

		const linknya = await driver.getCurrentUrl()

		const isiTeks = fs.readFileSync('./hasil.txt', 'utf8')
		fs.writeFileSync('./hasil.txt', `${isiTeks}\n${linknya}`)

		await driver.executeScript(`document.querySelector('[value="Reply"]').click()`)
		await driver.executeScript(`
			function cekEditor(){
				if (tinyMCE) {
					tinyMCE.activeEditor.setContent("Halo semuanya... salam kenal ya... ${jadiLink(x)}")
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