import {telegraph} from './modul/telegraph.js'
import {rosemont} from './modul/rosemont.js'
import {redzone} from './modul/redzone.js'
import {quincy} from './modul/quincy.js'
import {uttc} from './modul/uttc.js'
import {qcc} from './modul/qcc.js'
import {rapikan} from './modul/rapikan.js'
import {tes} from './modul/tes.js'

async function init(){
	await telegraph()
	await quincy()
	await uttc()
	await qcc()
	
	await redzone() // ini prosesnya agak lama
	await rosemont() // ini sering crash
	
	await rapikan()

	// await tes()
}
init()