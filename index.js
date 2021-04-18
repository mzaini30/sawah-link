import {telegraph} from './modul/telegraph.js'
import {rosemont} from './modul/rosemont.js'
import {redzone} from './modul/redzone.js'
import {quincy} from './modul/quincy.js'
// import {capitol} from './modul/capitol.js'

async function init(){
	// await telegraph()
	// await rosemont()
	await quincy()
	// await redzone()
}
init()