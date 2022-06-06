let a = "rijal"
// console.log(panggilNama("rian"));
// console.log(a);

// let jumlah = tambah(2, 2, 3, 3)
// console.log(jumlah);

// function declaration
function tambah(p1, p2, p3, p4) {
    let result = p1 + p2 + p3 + p4
    console.log(result);
    return result
}

// tambah(1, 2, 3, 4)

// function expression
let kali = function(p1, p2, p3, p4) {
    return p1 * p2 * p3 * p4
}

let angka = 10

function ganjilGenap(angka) {
    let hasil = ""
    // let angka = 20
    if (angka % 2 == 0) {
        hasil = "genap"
    }
    else {
        hasil = "ganjil"
    }

    return hasil
}

// console.log(ganjilGenap(77))
// console.log(ganjilGenap(angka))
// console.log(ganjilGenap(tambah(1, 2, 3, 4)))
// console.log(ganjilGenap(tambah(kali(1, 1, 1, 2), kali(1, 1, 1, 2), kali(1, 1, 1, 2))))
// console.log(ganjilGenap(66))
// console.log(ganjilGenap(123))
// console.log(ganjilGenap(43))
// console.log(ganjilGenap(1))

function panggilNama() {
    return arguments
}
// conflict nama
// function panggilNama(params) {
//     return params
// }

// console.log(panggilNama("rian"));

undefined
null

let pembagian = (a, b) => {
    let hasil = a % b
    return hasil
}

// console.log(pembagian(198, 9));
let fungsi = [panggilNama("isinya"), "ini", "itu"]
console.log(fungsi);