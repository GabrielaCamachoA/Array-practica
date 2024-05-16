// pop: elimina el ultimo elemento del array
// push: agrega el ultimo elemento del array
// unshift: agrega el primer elemento del array
// lenght: es la longitud del array (cuantos elementos tiene)

//filtrar, some, find
// for of es similar al bucle for
// for in recorre todo el aray como el for pero no se utilizan en arrays.

// arrays multidimensionales = los arrays pueden tener arrays dentro
// toString= regresa el array como string

//Ejercicio 
// de un arrgelo de 4 digitos, aplicar todos los metodos dados hasta ahora

let array = ["Perro", "Gato", "Pajaro", "Mariposa"];
array.push("Conejo");
console.log(array);

array.pop()
console.log(array);

array.shift()
console.log(array);

array.unshift("Huron")
console.log(array);

console.log(array.length);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}