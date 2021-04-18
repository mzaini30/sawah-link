import {driver}  from './init.js'
import {kumpulan}  from './olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from './jadi-link.js'

export async function qcc(){
	for (let x of kumpulan){
		await driver.get('https://theq.qcc.edu/ICS/Campus_Life/Campus_Groups/Music_Club/Discussion.jnz?portlet=Forums&screen=PostView&screenType=change&id=08c984cf-b434-4b60-a2c2-88cfcef2587b')

		await driver.executeScript(`document.querySelector('a[aria-label="Go to Last page"]').click()`)

		const linknya = await driver.getCurrentUrl()

		const isiTeks = fs.readFileSync('./hasil.txt', 'utf8')
		fs.writeFileSync('./hasil.txt', `${isiTeks}\n${linknya}`)

		await driver.executeScript(`document.querySelector('.btn.btn-sm.btn-primary.post-reply-btn').click()`)
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