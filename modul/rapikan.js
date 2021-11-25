import fs from 'fs'
import buatFileHasil from './buat-file-hasil.js'

export default function(){
	buatFileHasil()

	let data = fs.readFileSync('./hasil.txt', 'utf8')
	data = data.trim().split('\n')
	data = [...new Set(data)]
	data = data.join('\n')
	fs.writeFileSync('./hasil.txt', data)
}