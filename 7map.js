//toma todos los elementos pero los devuelve con una funcion 

const arr = [1,2,3,4,5,6]
const mapped = arr.map(el => `<h1> ${el * 2} </h1>`); 

console.log(mapped)


const alumnos = [
    {
        id: 1, 
        name: "Francisco"
    },
    {
        id: 2, 
        name: "Carlos"
    },
    {
        id: 3, 
        name: "Juan"
    }
]

const mapped2 = alumnos.map(alumno => `<h1>${alumno.name}</h1>`)
console.log(mapped2)