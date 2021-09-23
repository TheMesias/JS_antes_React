const arr = [0,1,2,3,4,5,6]

const r = arr.filter((el, i) => {
    console.log(i)
    return el > 2; 
}); 

console.log(r); 