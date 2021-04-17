import fs from 'fs'

let banyak = fs.readFileSync('./banyak.txt', 'utf8')
banyak = +banyak

let google = fs.readFileSync('./google.txt', 'utf8')

let blog = fs.readFileSync('../blog.txt', 'utf8')
blog = blog.split('\n')

let baru = []
for (let x of blog){
	baru = [...baru, google.replace(/{url}/g, x)]
}
baru = baru.join('\n').split('\n')

const pembagian = Math.ceil(baru.length / banyak)

console.log(pembagian)