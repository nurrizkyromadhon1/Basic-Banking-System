# Backend Javascript Challenge
## Silver Chapter 4

**NUR RIZKY ROMADHON**
Github : <https://github.com/nurrizkyromadhon1/Basic-Banking-System>
**FGA 4 BACK END ENGINEERING KELAS 1**

**SKILL METRICS**
*(Kemampuan teknis yang akan dipelajari)*
* Node.JS
* Package Management
* Express.JS
* ORM with Prisma


**DELIVERY**
*(Hal yang akan dilakukan untuk dapat melewati chapter)*
1. Inisialisasi proyek Express.js dengan menggunakan perintah npm init -y
2. Instal Express.js dan Prisma.js dengan menjalankan perintah npm install express prisma
3. Implementasikan server Express.js dengan beberapa endpoint yang memanfaatkan Prisma.js untuk berinteraksi dengan basis data PostgreSQL yang telah Anda buat pada Challenge 3
4. Contoh endpoint: /accounts untuk mengambil daftar akun, /deposit untuk melakukan deposit, /withdraw untuk melakukan penarikan, dan lainnya
5. Buatlah pull request dari branch feature ke branch main di repositori GitHub


**CRITERIA**
*(Kriteria pengumpulan challenge yang harus kamu penuhi untuk dapat melewati chapter)*
1. Mampu membuat API menggunakan Express JS (40)
2. Mempu melakukan CRUD kedalam database menggunakan Prisma (40)
3. Mampu menggunakan JSON (20)



**Studi Kasus**
Pada challenge kali ini, kamu akan mengintegrasikan Express.js dan Prisma.js ke Dalam "Basic-Banking-System"

**Relations**
Dari ERD sebelumnya, relasi yang dibentuk seperti berikut:
1. Setiap User dapat memiliki banyak Akun (One-to-Many antara Users dan Bank Accounts).
2. Setiap Akun hanya dimiliki oleh satu User (Many-to-One antara Bank Accounts dan Users).
3. Setiap User hanya memiliki satu Profile (One-to-One antara Users dan Profiles)
4. Setiap Profile hanya dimiliki oleh satu User (One-to-One antara Profiles dan Users)
5. Setiap Akun dapat memiliki banyak Transaksi (Many-to-Many antara Bank Accounts dan Bank Accounts melalui table penampung Transactions).




