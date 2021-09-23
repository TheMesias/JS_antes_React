//Spread: tomar valores dentro de un arreglo 


//===============ARRAYS
const fn = (a,b,c) => console.log(a + b + c); 

const arr = [1,2,3,4]


fn(...arr); 


//si los argumentos son menores que los parametros definidos sale error porque 
//cuando no completan los parametro se vuelven undefined 
const fn2 = (a,b,c) => console.log(a + b + c) //= NaN

const arr2 = [1,2]

fn2(...arr2); 


/***** IMPORTANT *******/
//cuando se crea un array con el spreadOperator lo que se esta creando es una !COPIA!
const arr3 = [...arr, ...arr2]; 

console.log(arr3);//imprime el array

arr.push(5);//cuando se modifica el array original no afecta al array con arr3 porque es una copia 

console.log(arr3);//aunque se modifique el original imprime igual 



//=====================OBJETOS 
/*
===Al igual que en arrays se crea una copia de los objetos y cuando se cambia el valor no afecta al objeto creado
===Tambien si existen propiedades del mismo se reemplazan por el ultimo valor asignado del ultimo objeto 

*/

const obj1 = {a: 5, b:2}
const obj2 = {a: 10,  c: 'Programming'}

const obj3 = {...obj1, ...obj2} 

console.log(obj3); 
