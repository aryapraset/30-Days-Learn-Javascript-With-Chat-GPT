//Latihan Variabel dan Tipe Data
let nama = "Arya";
let umur = 25;
let isStudent = true;

console.log(nama);
console.log(umur);
console.log(isStudent);

//Latihan percabangan
const nilai = 50;

if (nilai > 60) {
    console.log("Lulus")
} else {
    console.log("Tidak Lulus")
}

//Latihan Pengulangan
for(let x = 0; x < 10; x++){
    console.log(x);
}

for(let y = 10; y > 0; y--){
    console.log(y);
}


//Latihan fungsi
function greeting(name) {
    if (!name) {
        name = "Arya";
    }
    return `Halo, ${name}!`;
}

console.log(greeting());

//Latihan Debugging
function multiply(){
    const num1 = 10;
    const num2 = 20;
    return num1 * num2;
}

console.log(multiply());