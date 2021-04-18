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
	await quincy()
	await uttc()
	await qcc()
	await redzone() // ini prosesnya agak lama
	await rosemont() // ini sering crash
}
init()