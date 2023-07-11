//Manipulasi Array
const myArray = [1, 2, 4, 5, "Home", "Javascript"];
const addedArray = ["Egg", "Oil", 50, 30];
//Tambah elemen baru ke Array
myArray.push(6); //Fungsi push ini akan menambahkan data di akhir array
myArray.unshift(16); //digunakan untuk menambahkan elemen di awal array
//Hapus Elemen
myArray.pop() // mengeluarkan data atau elemen terakhir dari array
myArray.shift() //Digunakan untuk mengeluarkan elemen pertama dari array
//Gabung Elemen
console.log(myArray)
console.log(myArray.concat(addedArray));

//Iterasi pada Array
const numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(function(number) {
    console.log(number);
});

const squaredNumbers = numbers.map(function(number){
    return number*number;
});
console.log(squaredNumbers);

const evenNumbers = numbers.filter(function(number){
    return number %2 == 0;
}) ;
console.log(evenNumbers);

//Manipulasi Objek
const person = {
    name: "Arya",
    age: 25,
    occupation: "Enterpreneur"
}

person.age = 30;
person.city = "Jakarta";
delete person.occupation;

console.log(person);

//Iterasi pada objek
const student = {
    name : "Arya Prasetiyo",
    age : 30,
    major : "Pendidikan Teknik Elektro" 
}

for (const property in student) {
    console.log(`${property}: ${student[property]}`);
}

const property = Object.keys(student);
console.log(property);

const objek = Object.values(student);
console.log(objek);

//JSON
const book = {
    title : "Harry Potter",
    author : "J.K Rowling"
}

const jsonString = JSON.stringify(book);
console.log(jsonString);

const parseBook = JSON.parse(jsonString);
console.log(parseBook);