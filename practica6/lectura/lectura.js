window.onload = lectura()

var textoSplit
var arraySize = 0
function lectura(){
    var texto = prompt("Ingrese el texto a leer")
    var tiempo = prompt("Ingrese el tiempo que quiere ver la palabra (milisegundos)")

    textoSplit = texto.split(' ')
    control = setInterval(palabras,tiempo);
    

    // console.log('%c'+segundos, 'color: red');
}

function palabras() {
    console.clear()
    if ((arraySize) < textoSplit.length) {
        textoSplit[arraySize]

        var media = Math.round(textoSplit[arraySize].length/2)-1
        var palabraMod = ""

        for (let index = 0; index < textoSplit[arraySize].length; index++) {

            if (index == media) {
                palabraMod += "%c"+textoSplit[arraySize].substring(index,index+1)+"%c"
            }else{
                palabraMod += textoSplit[arraySize].substring(index,index+1)
            }
        }

        console.log(palabraMod, 'color: red', 'color:black')
        // console.log("Largo: ",textoSplit[arraySize].length, " media: ",media, " palabra: ",palabraMod)
        
        arraySize=arraySize+1
    }else{
        stop();
        console.log("Finalizó el texto")
    }
}


function stop() {
    clearInterval(control);
    arraySize = 0;
}