# Sawah Link

Auto spam ke berbagai forum.

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

## Install Dependencies

```bash
npm i
```

## Jalankan

```bash
node .
```

Hasilnya di `hasil.txt`