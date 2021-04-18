import {driver}  from './init.js'
import {kumpulan}  from './olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from './jadi-link.js'

export async function redzone(){
	for (let x of kumpulan){
		await driver.get('https://redzone.labette.edu/ICS/Campus_Life/Campus_Groups/Phi_Beta_Lambda/Discussion.jnz?portlet=Forums&screen=PostView&screenType=change&id=c6bad91c-0181-45d7-b9c6-1c76ae2edd46&p=8')
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