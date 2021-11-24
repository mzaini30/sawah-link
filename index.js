#!/usr/bin/env node

import {telegraph} from './modul/telegraph.js'
import {rosemont} from './modul/rosemont.js'
import {redzone} from './modul/redzone.js'
import {quincy} from './modul/quincy.js'
import {uttc} from './modul/uttc.js'
import {qcc} from './modul/qcc.js'
import {rapikan} from './modul/rapikan.js'
import {tes} from './modul/tes.js'
import {uned} from './modul/uned.js'
import {ustjogja} from './modul/ustjogja.js'
import {ui} from './modul/ui.js'
import {unib} from './modul/unib.js'

async function init(){
	await telegraph()
	// await quincy() // login required
	// await uttc() // login required
	// await qcc() // login required
	// await redzone() // login required - ini prosesnya agak lama
	// await rosemont() // login required - ini sering crash

	// yang pakai login di bawah ini, nanti aja dulu
	// await ustjogja() // error - dari sini mulai captcha
	// await ui() // agak lama dikit
	// await uned() // not found - loadingnya lama banget
	// await unib() // captcha google
	
	await rapikan()
}
init()