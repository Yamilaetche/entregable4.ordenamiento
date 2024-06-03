/*Implemente un algoritmo de ordenamiento con
el método Bubble Sort, para que ordene un
arreglo de longitud N en orden descendente.*/


//número al Azar
function Azar(numAzar: number): number {
    return Math.floor(Math.random() * numAzar);
}

//cargar datos del arreglo.
function cargar(arreglo:number[], cantidad:number, numAzar:number){
   
    for (let i: number = 0; i<cantidad; i++) {
     arreglo[i] = Azar(numAzar);
}
}

//escribir el arreglo en una linea.
function escribirEnUnaLinea(arreglo:number[], cantidad:number) {
    let vector:string = "" ;
     
     for (let i: number= 0 ; i<cantidad; i++){
         vector += `${arreglo[i]} `;
        }
         console.log (vector);
 }

//intercambiar los indices
function intercambiar(arreglo:number[], i:number, j:number) {
    let aux:number;
    aux = arreglo[j] ;
    arreglo[j] = arreglo[i] ;
    arreglo[i] = aux ;
}

//comparar los datos del arreglo.
function comparar(arreglo : number[], i : number, j :number) : number {
  let comparacion : number;
    if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
     } else if (arreglo[i] < arreglo[j]) {
    comparacion = 1;
      } else {
    comparacion = -1;
}
    return comparacion;
}

//funcion donde se muestra en burbujeo y acomoda los datos
function burbuja(arreglo : number[], cantidad : number){
  
     for (let j: number = 0 ; j < cantidad; j++) {
         for (let i: number= 0 ; i < cantidad; i++) {
             if (comparar(arreglo, i, i+1) == 1 ) {
        intercambiar(arreglo, i, i+1); 
            }
        }
    }
}

let limite : number = 10;
let arreglo : number[]= new Array(limite);
cargar(arreglo, limite, 100);
escribirEnUnaLinea(arreglo, limite);
burbuja(arreglo, limite);
escribirEnUnaLinea(arreglo, limite);