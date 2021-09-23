/*Aplica una funcion a cada elemento de un array y devuelve un unico valor */

const arr = [1,2,3,4,5,6]
const getMax = (a,b) => Math.max(a,b)

//hay que tener cuidado con el segundo parametro porque si son numero negativos hay que elimnarlo 
//el segundo parametro significa el "valor" de comienzo
const r1 = arr.reduce(getMax,0); 

console.log(r1)


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

const r2 = alumnos.reduce((acc,alumno) =>{
    
    if(alumno.id >= 2){
        return acc 
    }

    return acc.concat(alumno);
}, [])

console.log(r2); 
