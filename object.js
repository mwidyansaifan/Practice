let object = { mobil: "honda", motor: "yamaha", sepeda: "polygon" } // curly bracket
let array = ["ifan", "oky", "aziz"]
let kepala = { "mata": 2, hidung: 1, lobangHidung: 2 }
let tangan = ["jari", "lengan", "kuku"]
// console.log(array[0]);
// console.log(object.mobil);
console.log(kepala.mata);
kepala.telinga = 2
kepala["mulut"] = 1
kepala["bulu hidung"] = 100
console.log(kepala);
class Manusia {} 
// variabel = dengan curly bracket
// isinya key dan value
let manusia = {
    nama: "rijal",
    umur: 21,
    single: false,
    affiliate: [{
        akademi: "fosan"
    }, {
        office: "duski"
    }],
    perkalian: function(a,b) {
        return a * b
    }
}

let asd = function(a, b) {
    return a + b
}

manusia.pertambahan = asd

// console.log(manusia["affiliate"][0]["akademi"]);
// console.log(manusia.affiliate[0].akademi);
// console.log(manusia.perkalian(3, 5));
// console.log(manusia.pertambahan(2, 4));

// array of object
let arrOfObj = [{}, {}, {}]
let batch7 = [{
    nama: "aziz",
    umur: 21
}, {
    sekolah: "fosan",
    alamat: "semarang"
}]

// console.log(manusia);
// console.log(manusia.umur);
// console.log(manusia["nama"]);
// console.log(batch7[0]["umur"]);

// for (let i = 0; i < batch7.length; i++) {
//     console.log(batch7[i]);
// }

// for (key in manusia) {
//     console.log(manusia[key]);
// }


// let manusia = {}
let a = "tinggi badan"

// manusia = "rijal"
manusia.beratBadan = 90
manusia[a] = 172
// console.log(manusia);
// console.log(batch7);

let z = [manusia]

// console.log(z);