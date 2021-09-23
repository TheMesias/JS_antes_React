//casi igual spread pero aca sacamos los valores, siempre debe ir al !ULTIMO!
//los valores obtenido son arreglos 

const res = (a, ...argumentos) => {
    console.log(a,argumentos); // = 1 , [2,3] 
}

res(1,2,3)



//object destructuring 
const obj = {
    a: 1, b:2, c:3, d:4
}

const {a,b, ...restoObj} = obj  //saca los valores de los objetos 

console.log(a,b,restoObj); //= 1,2, {3 , 4}


//array destructuring 
//si se pones mas destructuring que valores salen undefined 
const arr = [1,2,3,4]
const [a,b,c] = arr 
const [...d] = arr
console.log(a,b,c) //= 1,2,3
console.log(d) //= [1,2,3,4]