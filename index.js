import {telegraph} from './modul/telegraph.js'
import {rosemont} from './modul/rosemont.js'
import {redzone} from './modul/redzone.js'
import {quincy} from './modul/quincy.js'
import {uttc} from './modul/uttc.js'
import {qcc} from './modul/qcc.js'
// import {capitolCollege} from './modul/capitol-college.js'
// import {capitol} from './modul/capitol.js'

async function init(){
	await telegraph()
	await rosemont()
	await quincy()
	await uttc()
	await qcc()
	await redzone()
}
init()