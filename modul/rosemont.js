import {driver}  from './init.js'
import {kumpulan}  from './olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from './jadi-link.js'

export async function rosemont(){
	for (let x of kumpulan){
		await driver.get('https://iway.rosemont.edu/ICS/Campus_Life/Campus_Groups/Organization_of_African_American_Students/Home.jnz?portlet=Discussion_Board&screen=PostView&screenType=change&id=04e9e807-e896-4946-ba8a-fe3d7a1d2d76&p=551')

		await driver.executeScript(`document.querySelector('.row.forums-paging.white-background.dark-top-border.vert-padding-xsm .col-xs-4.col-md-3 .float-right a:nth-child(3)').click()`)

		const linknya = await driver.getCurrentUrl()

		const isiTeks = fs.readFileSync('./hasil.txt', 'utf8')
		fs.writeFileSync('./hasil.txt', `${isiTeks}\n${linknya}`)

		await driver.executeScript(`document.querySelector('.btn.btn-sm.btn-primary.float-right').click()`)
		await driver.executeScript(`
			function cekEditor(){
				if (tinyMCE) {
					tinyMCE.activeEditor.setContent("${jadiLink(x)}")
				} else {
					cekEditor()
				}
			}
			cekEditor()
		`)
		await driver.executeScript(`document.querySelector('.btn.btn-primary[value="Submit"]').click()`)
		await driver.sleep(Math.random() * 3000)
	}
}