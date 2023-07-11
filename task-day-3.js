const myArray = [1,2,3,4,5,6];

myArray.forEach(function(myArray){
    console.log(myArray);
})

const duplicateArray = myArray.map(function(myArray){
    //duplikat nilai array
    return myArray * myArray;
})

const returnElement = myArray.filter(function(myArray){
    //return array element
    return myArray;
})

console.log(duplicateArray);
console.log(returnElement);

//Rest Parameter
function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}
console.log(sum(1,22,3));

//Fungsi dengan Nilai Balik
function calculateArea(width, height){
    return width * height;
}
console.log(calculateArea(10,30));

//Error Handling
function divide(a, b){
    if (b === 0){
        throw new Error("Pembagian dengan nol tidak diizinkan.");
    }

    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log(error.message);
}