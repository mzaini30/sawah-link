#!/usr/bin/env node

import telegraph from './forum/telegraph.js'
import capt from './forum/capt.js'
import bankstreet from './forum/bankstreet.js'
import tiger from './forum/tiger.js'

import rapikan from './modul/rapikan.js'

async function init(){

	await telegraph()
	await capt()
	await tiger() // kedua terakhir - loading lama
	await bankstreet() // ini taro paling akhir - kadang resultnya error
	
	await rapikan()
}
init()