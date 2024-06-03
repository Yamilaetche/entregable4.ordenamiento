function Azar(numAzar) {
    return Math.floor(Math.random() * numAzar);
}
function cargar(arreglo, cantidad, numAzar) {
    for (var i = 0; i < cantidad; i++) {
        arreglo[i] = Azar(numAzar);
    }
}
function escribirEnUnaLinea(arreglo, cantidad) {
    var vector = "";
    for (var i = 0; i < cantidad; i++) {
        vector += "".concat(arreglo[i], " ");
    }
    console.log(vector);
}
function intercambiar(arreglo, i, j) {
    var aux;
    aux = arreglo[j];
    arreglo[j] = arreglo[i];
    arreglo[i] = aux;
}
function comparar(arreglo, i, j) {
    var comparacion;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    }
    else if (arreglo[i] < arreglo[j]) {
        comparacion = 1;
    }
    else {
        comparacion = -1;
    }
    return comparacion;
}
function burbuja(arreglo, cantidad) {
    for (var j = 0; j < cantidad; j++) {
        for (var i = 0; i < cantidad; i++) {
            if (comparar(arreglo, i, i + 1) == 1) {
                intercambiar(arreglo, i, i + 1);
            }
        }
    }
}
var limite = 10;
var arreglo = new Array(limite);
cargar(arreglo, limite, 100);
escribirEnUnaLinea(arreglo, limite);
burbuja(arreglo, limite);
escribirEnUnaLinea(arreglo, limite);
