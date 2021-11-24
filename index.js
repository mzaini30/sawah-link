#!/usr/bin/env node

import {telegraph} from './forum/telegraph.js'
import {rapikan} from './modul/rapikan.js'

// import {rosemont} from './modul/rosemont.js'
// import {redzone} from './modul/redzone.js'
// import {quincy} from './modul/quincy.js'
// import {uttc} from './modul/uttc.js'
// import {qcc} from './modul/qcc.js'
// import {tes} from './modul/tes.js'
// import {uned} from './modul/uned.js'
// import {ustjogja} from './modul/ustjogja.js'
// import {ui} from './modul/ui.js'
// import {unib} from './modul/unib.js'

async function init(){
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
	
	await telegraph()
	
	await rapikan()
}
init()