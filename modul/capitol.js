import {driver}  from './init.js'
import {kumpulan}  from './olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from './jadi-link.js'

export async function capitol(){
	for (let x of kumpulan){
		await driver.get('https://mycapitol.captechu.edu/ICS/Campus_Life/Campus_Groups/CapVets/Discussion.jnz?portlet=Forums&screen=PostView&screenType=change&id=27a2dd0f-3008-4a13-8fc0-fba52ae072df&p=2')
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