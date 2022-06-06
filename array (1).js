let array = ["rijal", 21, true, ["rian", "ilham", "oky"], undefined, null, false, "", " ", 0, -1]
let data = "rian"
let a = true
let b = 0
let c = null
let d = undefined

function cekData(params) {
    for (let i = 0; i < params.length; i++) {
        const hasil = params[i];
        if (hasil) {
            console.log(">>>",hasil);
        }
        else {
            console.log("else", hasil);
        }
    }
}

// cekData(array)

// string adalah array of character
console.log(data[0]);
console.log(array.length);

let array = [ "rijal", "ilham", "oky" ]
let i = 0
let j = 0
for (i; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
for (j; j < array.length; j++) {
    console.log(array[j]);
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
let a = 0
    while (a < array.length) {
        console.log(array[a]);
        a++
    }
    console.log(a);

// console.log(index);