//se llama expresiones de clase
const Rectangle = class {

}
const r = new Rectangle(); 


class Car { 
    //se puede asignar un valor por defecto en caso de que no pasen un argumento
    propiedad = 'mi propiedad'; 

    #rapido; // variable privada deben ser definidos 
            //no se pueden acceder a propiedades privadas solo las intancias de clase pueden acceder (los metodos)

    static variEstatica = 45; 
    constructor (price = 'por defecto', rapido = false) {
        this.price = price;  
        this.#rapido = rapido; 
    }

    mostrar(){
        console.log(`Ferrari ${this.price}$ ${this.#rapido ? 'Carro Veloz' : 'Carro lento'}`); 
    }

    //metodo estatico (se puede acceder a traves de la clase y no es necesario una instancia)
    // no pueden aceder a las propiedas si se le pone `${this.propiedad}` = undefined; 
    //las propiedades pertenecen a las intancias publicas o privadas  
    //para acceder se debe crear una variable static 
    static saludar () {
        console.log("hola soy una instancia privada" + `${this.variEstatica}`); 
    }
}


//se debe utilizar la palabra reservada new 
const price = new Car(3200, true);
price.mostrar();  
const lambo = new Car(3000); 
lambo.mostrar(); 
const kia = new Car(); 
kia.mostrar(); 

//los metodos estan en pero no se amuestra porque los creadores de nodejs 
//no decidieron mostrarlo pero si se le pone con el navegador si se muestra los metodos 
console.log(price.__proto__); 


//no es necesario generar una instancia por STATIC
Car.saludar(); 



/************** IMPORTANT ************/
//console.log(circle); 
function circle () {

}

/*HOISTING*/
//Variable con var y funciones definidas con function 
//al momento de compilar las lleva al comienzo de los archivos
//es por eso que podemos acceder al valor desde cualquier lugar 