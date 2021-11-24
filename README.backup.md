# Sawah Link (WIP)

Auto tanam link ke berbagai forum.

RESIKO DITANGGUNG MASING-MASING YA~

## Persiapan

Install dulu Node JS _versi di atas 12_, kalau belum punya.

### Linux

```bash
sudo apt install nodejs
```

### Android (Termux)

```bash
pkg install nodejs
```

### Windows

Kunjungi https://nodejs.org/en/download/

## Keterangan

Mendukung Chrome versi 89. Kalau misalnya kamu menggunakan Chrome versi yang lain (contoh: versi 88), ketik perintah berikut:

```bash
npm i -D chromedriver@88
```

Isi link blog di `blog.txt`

Untuk link blog di `blog.txt`, bisa lebih dari satu blog. Contohnya seperti ini:

```
https://kucing.com
https://miauw.com
https://harimau.com
```

Jadi, pemisahnya adalah baris baru

## Install Dependencies

```bash
npm i
```

## List Link Target

Ada di folder `bahan/`. Untuk forum yang bisa ditanam, berawalan `#`

## Setting

### Mengatur Banyak Link dalam Satu Kali Tanam

Edit di `banyak.txt`

### Melist Link Blog yang Akan Ditanam

Edit di `blog.txt`

### Menambah Link Redirect

Edit di `redirect.txt` dengan format seperti ini: `https://situs.com/?menuju={url}`

## Jalankan

```bash
node .
```

Hasilnya di `hasil.txt`
