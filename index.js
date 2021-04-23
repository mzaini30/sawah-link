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
	await quincy()
	await uttc()
	await qcc()

	await ustjogja()
	await unib()
	await ui() // agak lama dikit
	await uned() // loadingnya lama banget
	
	await redzone() // ini prosesnya agak lama
	await rosemont() // ini sering crash
	
	await rapikan()
}
init()