import fs from 'fs'

export function rapikan(){
	let data = fs.readFileSync('./hasil.txt', 'utf8')
	data = data.trim().split('\n')
	data = [...new Set(data)]
	data = data.join('\n')
	fs.writeFileSync('./hasil.txt', data)
}