const fs = require('fs')

let banyak = fs.readFileSync('./banyak.txt', 'utf8')
banyak = +banyak

let google = fs.readFileSync('./google.txt', 'utf8')
google = google.split('\n')

module.exports = {banyak, google}