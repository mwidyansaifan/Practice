//# OOP Adventure Park

//> ⏰ time estimation: 120 minutes

//Kali ini kamu akan diminta membuat sebuah sistem Kartu bermain di taman bermain seperti dufan bernama **Adventure Park**, anda mendaftarkan konsumen sebagai tamu VIP maupun regular, mengatur saldo serta dapat mengembalikan kartu apabila telah selesai bermain.

---

//## Release 0

//Buatlah class `Person` yang memiliki properti:

//- name : string
//- phone : string

//Terdapat 4 jenis `Wahana`, yaitu:

//- RollerCoaster, dengan properti :

//  - name : string
//  - price : number (nilai selalu 25000 )

//- Seaworld, dengan properti :

//  - name : string
//  - price : number (nilai selalu 30000 )

//- Bianglala, dengan properti :

//  - name : string
//  - price : number (nilai selalu 20000)

//- Theater, dengan properti :
//  - name : string
//  - price : number (nilai selalu 50000)

//Untuk setiap jenis `WahanaCard` akan memiliki properti :

//- type : string (vip/regular)
//- user : object Person
//- balance : number

//`WahanaCard` akan terbagi menjadi 2 jenis:

//- VIPCard (harga: Rp. 500000)
//- RegularCard (harga: Rp. 150000)

//## Release 1

//Buatlah class `WahanaPark` yang memiliki properti:

//- rollerCoaster : objek wahana RollerCoaster
//- seaWorld : objek wahana Seaworld
//- theater : objek wahana Theater
//- bianglala : objek wahan Bianglala
//- customers: kumpulan objek WahanaCard

//Buatlah method `register` yang akan menambahkan person baru ke properti customers, jika kelas kartu adalah 'VIP' maka person yang akan ditambahkan adalah instance dari class `VIPCard`, bila jenis kartu adalah 'regular' maka person yang akan ditambahkan adalah instance dari class `RegularCard`, lalu me-`return` card baru tersebut.

//Bila person yang mendaftar memiliki nomor hp yang sama pada daftar customer wahana, makan munculkan pesan error.

//Bila person mendaftar kartu VIP dengan uang Rp.600000, maka kartu VIP memiliki balance (Rp.600000 - VIP price Rp.500000 = Rp.100000), gunakan pola yang sama untuk kartu Regular

//**Perhatikan driver code dengan seksama!!!**

//## Release 2

//Untuk setiap `Wahana` akan terdapat method:

//- checkIn: berfungsi untuk bermain pada wahana tersebut dan mengurangi saldo sesuai harga

//ketentuan checkIn:

//- VIP dapat bermain semua wahana dengan gratis
//- Khusus wahana Theater tidak gratis untuk Regular maupun VIP.
//- Validasi mengecek apabila saldo cukup untuk check-in ke wahana

//**Perhatikan driver code dengan seksama!!!**

//## Release 3 (BONUS)

//Pada kartu wahana terdapat fungsi `topup` untuk menambahkan saldo dan pada WahanaPark terdapat fungsi `returnCard` mengembalikan kartu dan menampilkan sisa saldo. Buatlah validasi mengecek apabila person sudah me-return kartu

//**Perhatikan driver code dengan seksama!!!**


const adventurePark = new WahanaPark("Adventure Park");
// Selamat datang di Adventure Park

const tony = new Person("Tony", "085290910291");
console.log(tony);
// Person { name: 'Tony', phone: '085290910291' }

const nadia = new Person("Nadia", "085290910291");
console.log(nadia);
// Person { name: 'Nadia', phone: '085290910291' }

const isro = new Person("Isro", "082726182321");
console.log(isro);
// Person { name: 'Isro', phone: '082726182321' }

const semi = new Person("Semi", "0810000100");
console.log(semi);
// Person { name: 'Semi', phone: '0810000100' }

const armedi = new Person("Armedi", "089909900091");
console.log(armedi);
//Person { name: 'Armedi', phone: '089909900091' }

const tonyRegular = adventurePark.register(tony, "regular", 200000);
// Berhasil membeli kartu regular atas nama Tony, saldo: 50000

const armediVip = adventurePark.register(armedi, "vip", 30000);
// Gagal membeli kartu wahana, uang anda tidak cukup

const nadiaRegular = adventurePark.register(nadia, "regular", 120000);
// Maaf nomor hp anda telah terdaftar dalam customer kami, silahkan daftar dengan nomor hp lain

const isroVip = adventurePark.register(isro, "vip", 800000);
// Berhasil membeli kartu vip atas nama Isro, saldo: 300000

const semiVip = adventurePark.register(semi, "vip", 1000000);
// Berhasil membeli kartu vip atas nama Semi, saldo: 500000

console.log(adventurePark.customers);
// [
//     RegularCard {
//       type: 'regular',
//       user: Person { name: 'Tony', phone: '085290910291' },
//       balance: 50000
//     },
//     VIPCard {
//       type: 'vip',
//       user: Person { name: 'Isro', phone: '082726182321' },
//       balance: 300000
//     },
//     VIPCard {
//       type: 'vip',
//       user: Person { name: 'Semi', phone: '0810000100' },
//       balance: 500000
//     }
//   ]
adventurePark.rollerCoaster.checkIn(tonyRegular);
//Selamat datang di wahana Roller Coaster Tony, Saldo anda sekarang adalah Rp.25000

adventurePark.theater.checkIn(tonyRegular);
// (VIP dan regular berbayar) Maaf, saldo Tony tidak mencukupi, biaya wahana Theater adalah Rp.50000, saldo anda Rp.25000

tonyRegular.topup(30000);
// Selamat, saldo sebesar 30000 telah ditambahkan pada kartu Tony, saldo sekarang 55000

adventurePark.theater.checkIn(tonyRegular);
// (VIP dan regular berbayar) Selamat datang di wahana Theater Tony, Saldo anda sekarang adalah Rp.5000

adventurePark.rollerCoaster.checkIn(isroVip);
// Selamat datang di wahana Roller Coaster Isro, tidak dikenakan biaya karena kartu anda adalah VIP.

adventurePark.seaWorld.checkIn(isroVip);
// Selamat datang di wahana SeaWorld Isro, tidak dikenakan biaya karena kartu anda adalah VIP.

adventurePark.bianglala.checkIn(isroVip);
// Selamat datang di wahana Bianglala Isro, tidak dikenakan biaya karena kartu anda adalah VIP.

adventurePark.theater.checkIn(isroVip);
// (VIP dan regular berbayar) Selamat datang di wahana Theater, Saldo anda sekarang adalah Rp.250000

adventurePark.returnCard(tonyRegular);
// Pelanggan dengan nama Tony telah mengembalikan kartu, sisa saldo anda adalah Rp.5000

adventurePark.returnCard(tonyRegular);
// Pelanggan dengan nama Tony telah mengembalikan kartu / tidak terdaftar dalam daftar customer kami

adventurePark.returnCard(semiVip);
// Pelanggan dengan nama Semi telah mengembalikan kartu, sisa saldo anda adalah Rp.500000