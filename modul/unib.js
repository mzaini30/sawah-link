import {driver, elemen}  from './init.js'
import {kumpulan}  from './olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'
import {jadiLink} from './jadi-link.js'

export async function unib(){
	// https://ejournal.unib.ac.id/index.php/agrisep/article/view/1452/0
	// https://ejournal.unib.ac.id/index.php/agrisep/comment/add/1452/0
	
	const lihatArtikel = 'https://ejournal.unib.ac.id/index.php/agrisep/article/view/1452/0'
	const tambahKomentar = 'https://ejournal.unib.ac.id/index.php/agrisep/comment/add/1452/0'

	for (let x of kumpulan){
		await driver.get(tambahKomentar)

		await driver.wait(until.urlContains(tambahKomentar));

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

		await driver.wait(until.urlContains('agrisep/comment/view'));

		await driver.get(lihatArtikel)
		let linknya = await elemen('#commentsOnArticle ul li:last-child a')
		linknya = await linknya.getAttribute('href')

		const isiTeks = fs.readFileSync('./hasil.txt', 'utf8')
		fs.writeFileSync('./hasil.txt', `${isiTeks}\n${linknya}`)

		await driver.sleep(Math.random() * 3000)
	}
}