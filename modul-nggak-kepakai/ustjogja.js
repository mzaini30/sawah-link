import {driver, elemen}  from './init.js'
import {kumpulan}  from './olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from './jadi-link.js'

export async function ustjogja(){
	// https://jurnal.ustjogja.ac.id/index.php/spirit/article/view/1121/0
	// https://jurnal.ustjogja.ac.id/index.php/spirit/comment/add/1121/0
	// https://jurnal.ustjogja.ac.id/index.php/spirit/comment/view/1121/0
	for (let x of kumpulan){
		await driver.get('https://jurnal.ustjogja.ac.id/index.php/spirit/comment/add/1121/0')

		await driver.wait(until.urlContains('https://jurnal.ustjogja.ac.id/index.php/spirit/comment/add/1121/0'));

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

		await driver.wait(until.urlContains('spirit/comment/view'));

		await driver.get('https://jurnal.ustjogja.ac.id/index.php/spirit/article/view/1121/0')
		let linknya = await elemen('#commentsOnArticle ul li:last-child a')
		linknya = await linknya.getAttribute('href')

		const isiTeks = fs.readFileSync('./hasil.txt', 'utf8')
		fs.writeFileSync('./hasil.txt', `${isiTeks}\n${linknya}`)

		await driver.sleep(Math.random() * 3000)
	}
}