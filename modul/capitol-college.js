import {driver}  from './init.js'
import {kumpulan}  from './olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from './jadi-link.js'

// problem di sertifikat nggak valid

export async function capitolCollege(){
	for (let x of kumpulan){
		await driver.get('http://mycapitol.capitol-college.edu/ICS/Campus_Life/Campus_Groups/CapVets/Discussion.jnz?portlet=Forums&screen=PostView&screenType=change&id=d378742b-399e-48f7-97f0-8a0edc0a8c6e')

		await driver.executeScript(`location.href = 'http://mycapitol.capitol-college.edu' + document.querySelector('a[aria-label="Go to Last page"]').getAttribute('href')`)

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