import {telegraph} from './modul/telegraph.js'
import {rosemont} from './modul/rosemont.js'
import {redzone} from './modul/redzone.js'
// import {capitol} from './modul/capitol.js'

async function init(){
	// await telegraph()
	// await rosemont()
	await redzone()
}
init()