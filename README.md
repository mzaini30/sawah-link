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

<!--

## Menggunakan User Data (Jadi, Nggak Perlu Login Lagi) [REQUIRED]

Kita menggunakan teknik ini karena beberapa forum harus login dulu.

Pertama, buka `chrome://version`

Perhatikan pada bagian `Jalur Profil` atau `Profile Path`.

![Gambar Jalur Profil](https://i.ibb.co/0hKgFys/image.png)

Nah, kalau di laptopku kan, jalur profilnya itu: `/home/zen/.config/google-chrome/Default`. Beda laptop, beda jalur profilnya.

Kalau untuk Windows, misalnya aja: `C:\Google\Chrome\Default`, ubah `\` menjadi `\\`.

Di jalur profil itu, hapus teks `Default` sehingga menjadi: `/home/zen/.config/google-chrome`

Kemudian, tulis `/home/zen/.config/google-chrome` di `userdata.txt`.

Lalu, **tutup Google Chrome** untuk menjalankan aplikasi ini.

Mengapa harus tutup Google Chrome terlebih dahulu? Karena kita nggak bisa menggunakan folder User Data jika masih digunakan.

-->

## Jalankan

```bash
node .
```

Hasilnya di `hasil.txt`
