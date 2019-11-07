function ordenamiento(){
    numeros = prompt("Ingrese los numeros a ordenar")

    numerosSplit = numeros.split(',');
    numerosSplit = numerosSplit.map(Number)

    var n, i, k, aux;
    n = numerosSplit.length;    
    // Mostramos, por consola, la numerosSplit desordenada
    console.log(numerosSplit);
    
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (numerosSplit[i] > numerosSplit[i + 1]) {
                aux = numerosSplit[i];
                numerosSplit[i] = numerosSplit[i + 1];
                numerosSplit[i + 1] = aux;
            }
        }
    }

    console.log(numerosSplit); // Mostramos, por consola, la numerosSplit ya ordenada
    document.getElementById("contactos").innerHTML = numerosSplit
}
