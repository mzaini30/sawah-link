import {driver, elemen}  from './init.js'
import {kumpulan}  from './olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from './jadi-link.js'

export async function uned(){
	// ${jadiLink(x)}
	for (let x of kumpulan){
		await driver.get('http://revistas.uned.es/index.php/REEC/comment/add/7596/7264')

		await driver.wait(until.urlContains('http://revistas.uned.es/index.php/REEC/comment/add/7596/7264'));

		await driver.executeScript(`document.querySelector('#title').value = '${Math.random()}'`)
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

		await driver.wait(until.urlContains('REEC/comment/view'));

		// const linknya = 'http://revistas.uned.es/index.php/REEC/article/view/7596/7264'

		await driver.get('http://revistas.uned.es/index.php/REEC/article/view/7596/7264')
		let linknya = await elemen('#commentsOnArticle ul li:last-child a')
		linknya = await linknya.getAttribute('href')

		const isiTeks = fs.readFileSync('./hasil.txt', 'utf8')
		fs.writeFileSync('./hasil.txt', `${isiTeks}\n${linknya}`)

		// await driver.executeScript(`document.querySelector('.btn.btn-sm.btn-primary.post-reply-btn').click()`)
		
		// await driver.executeScript(`document.querySelector('.btn.btn-primary[value="Submit"]').click()`)
		await driver.sleep(Math.random() * 3000)
	}
}