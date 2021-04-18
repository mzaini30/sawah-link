import {driver, elemen}  from './init.js'
import {kumpulan}  from './olah-data.js'
import fs  from 'fs'
import until from 'selenium-webdriver/lib/until.js'

export async function rosemont(){
	// for (let x of kumpulan){
		const x = 'https://google.com https://google.com https://google.com '
		await driver.get('https://iway.rosemont.edu/ICS/Campus_Life/Campus_Groups/Organization_of_African_American_Students/Home.jnz?portlet=Discussion_Board&screen=PostView&screenType=change&id=04e9e807-e896-4946-ba8a-fe3d7a1d2d76&p=551')
	// }
}