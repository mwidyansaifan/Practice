// OOP = Object Oriented Programming
class Manusia {
    // isinya parameter
    constructor (nama, alamat, noHp) {
        this.namaPanggilan = nama,
        this.alamatnya = alamat,
        this.nomorHp = noHp
    }

    // method
    tampilNama() {
        // this.namaPanggilan
        return this.namaPanggilan;
    }

    hitungPerkalian(a, b) {
        return a * b
    }

    gantiNama(a) {
        this.namaPanggilan = a
        return this
    }
 
}

let nilaiA = 4
let nilaiB = 5

let obj = {
    nama: "rijal",
    tambah: function(a, b){
        return a + b
    }
}

let data = new Manusia("rijal", "semarang", 0987654321)
// console.log(data.nomorHp);
// // console.log(Manusia.tampilNama("rijal", "semarang", 0987654321));
// console.log(data.namaPanggilan);
// console.log(data.tampilNama());
// console.log(data.tampilNama().gantiNama("ifan"));
// console.log(data.gantiNama("doni").namaPanggilan);
// // console.log(data.hitungPerkalian(nilaiA, nilaiB));

class Makhluk extends Manusia {
    constructor(nama, alamat, noHp, kaki, tangan) {
        super(nama, alamat, noHp)
        this.kakinya = kaki,
        this.tangannya = tangan
    }
}

let variabel = new Makhluk( "2", "2")
let variabel2 = new Makhluk( "2", "2")

console.log(variabel.namaPanggilan);
console.log(variabel.tampilNama());


// class Manusia{
//     // constructor berisi parameter
//     constructor(namanya, umurnya, alamatnya){
//         //this berisi property
//         this.nama = namanya;
//         this.umur = umurnya;
//         this.alamat = alamatnya
//         this.status = single
//     }
    
//     panggilnama(){
//         return 'nama saya adalah: '+this.nama;
//     }
//     gantiNama(a){
//         this.nama = a
//         return "nama sudah berubah menjadi " + this.nama
//     }
//     tinggiBadan(a, b) {
//         let tinggi = a + b
//         return tinggi
//     }
// }

// let single = true
// // console.log(new Manusia("adhit", 17, "semarang", false, "sehat"));

// let manusiaBaru = new Manusia("puka", 19, "srondol")
// // console.log(manusiaBaru);

// console.log(manusiaBaru.panggilnama());
// console.log(manusiaBaru.gantiNama("doni"));
// // console.log(manusiaBaru.tinggiBadan(100, 70));
// // console.log(manusiaBaru.gantiNama("rian"));
