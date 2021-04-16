const fs = require('fs')

let banyak = fs.readFileSync('./banyak.txt', 'utf8')
banyak = +banyak

let google = fs.readFileSync('./google.txt', 'utf8')
google = google.split('\n')

let blog = fs.readFileSync('../blog.txt', 'utf8')
blog = blog.split('\n')

let listGoogle = []

for (let x of blog){
	for (let y in google){
		listGoogle = [...listGoogle, google[y].replace('{url}', encodeURIComponent(x))]
	}
}

console.log(listGoogle.length)

for (let n = 0; n < listGoogle.length; n += banyak){
	console.log(n)
}

// console.log(banyak)
// console.log(listGoogle)

module.exports = {banyak, google, blog}