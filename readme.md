# Prodia
Nama : Muhamad Satrio

Tech yang digunakan adalah NodeJS Express, PostgreSQL, dan Sequelize, Berikut adalah cara menjalankannya:

Dokumentasi API: https://documenter.getpostman.com/view/29490220/2sA3kRJ3yw

Cara penggunaan API:
1. Clone repository github
2. Jalankan di terminal “npm install” untuk instal dependencies yang ada
3. silahkan ubah .env.example menjadi .env dan kemudian isi sesuai data connection database PostgreSQL yang anda miliki dan client id serti client secret satu sehat anda.
4. Jalankan "npx sequelize-cli db:create" untuk membuat database
5. Jalankan "npx sequelize-cli db:migrate" untuk migration database yang ada di projek
6. Jalankan "npx sequelize-cli db:seed:all" untuk memasukkan seeders data ke database.
7. Jalankan di terminal “npm run watch"
8. Buka Postman (Pada link diatas) dan coba jalankan sesuai api yang ada.

Hal yang perlu diperhatikan:
1. Perlu register atau login terlebih dahulu untuk bisa mengakses setiap API yang ada pada api staff dokter register/login.
2. Authorization type Bearer Token kemudian Token diisi token JWT yang dapat diambil saat login/register.
3. Bagian API yang terdapat params silahkan ikuti sesuai yang ada pada postman
