import fs from 'fs'

let banyak = fs.readFileSync('./banyak.txt', 'utf8').trim()
banyak = +banyak

let google = fs.readFileSync('./redirect.txt', 'utf8')

let blog = fs.readFileSync('./blog.txt', 'utf8')
blog = blog.split('\n')

let baru = []
for (let x of blog){
	baru = [...baru, google.replace(/{url}/g, encodeURIComponent(x))]
}
baru = baru.join('\n').split('\n')

const pembagian = Math.ceil(baru.length / banyak)

let state = 0
let temp = ''

export let kumpulan = []

for (let _ of Array(pembagian)){
	for (let n = state; n < banyak + state; n++){
		temp += `${baru[n]} `
	}
	kumpulan = [...kumpulan, temp]
	temp = ''
	state += banyak
}

kumpulan = kumpulan.map(x => x.replace(/undefined /g, ''))