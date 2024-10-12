// 1. Qué son los Arrays
//Los arrays son estructuras de datos que permiten almacenar una colección de elementos del mismo tipo en una secuencia 
//Cada elemento dentro de un array se accede mediante un índice , que indica su posición en la secuencia, comenzando desde cero.
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    // Tu código aquí
    if (pedido.length === 0){
       return [];

    }
    //El shift elimina el nombre el primer elemento, que en este caso es el nombre del cliente
    const nombreCliente = pedido.shift();
    // unshift añade la bebida al inicio del array
    pedido.unshift("bebida");
    //push añade el nombre del cliente al final del array
    pedido.push(nombreCliente);

    return pedido;

}
// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0;
    // tu código aquí
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            suma += numeros[i];
            console.log(suma);
        }
        
    }
    return suma;
}
sumarPares([1,2,3,4,5,6,7]);

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    // Tu código aquí
    return palabras.every(palabra => palabra.endsWith('a'));
}

const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    // Tu código aquí
    const index = words.indexOf(word);
        if (index === -1) {
        return [];
    }
    
    return words.slice(index + 1);
}
const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    // Tu código aquí
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){

        if(matrix[i][j] === 'JavaScript'){
            return[i, j];

  
         }
        }
        
    }
    return[-1, -1];
}
       

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]
  
  const position = findJavaScript(matrix);
  console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    // Tu código aquí
    if (books.length === 0) {
        return []; // Retornamos un array vacío si no hay libros
    }

    // Inicializamos las variables para los índices
    let minIndex = 0;
    let maxIndex = 0;

    // Recorremos el array para encontrar los índices mínimos y máximos
    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i; 
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i; 
        }
    }
    return [minIndex, maxIndex];
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
