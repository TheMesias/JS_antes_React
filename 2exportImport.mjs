const carsA = ["ferrari", "tesla", "lambo"] 
const carsM = ["kia", "hyundai", "BMW"]
const carsB = [] 

const f1 = () => {
    console.log("function 1 export"); 
}

function f2() {
    console.log("function 2 export"); 
}



export {carsA, carsB, f1, f2} 
export default carsM
