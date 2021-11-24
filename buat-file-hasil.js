import {existsSync, appendFileSync} from 'fs'

export default function(){
	if (!existsSync('./hasil.txt')) {
		appendFileSync('hasil.txt', '')
	}
}