function cronometroStart(){
    valor = confirm("Iniciar cronometro")
    if (valor) {
        start()
    }
}

var isMarch = false; 
var acumularTime = 0; 
function start () {
    if (isMarch == false) { 
        timeInicial = new Date();
        control = setInterval(cronometro,1000);
        isMarch = true;
    }
}

function cronometro () { 
    console.clear()
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime); 

    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();
    hh = acumularTime2.getHours()-18;
    if (ss < 10) {ss = "0"+ss;} 
    if (mm < 10) {mm = "0"+mm;}
    if (hh < 10) {hh = "0"+hh;}
    console.log(hh+" : "+mm+" : "+ss)
}
 
function pause() { 
    if (isMarch == true) {
        clearInterval(control);
        isMarch = false;
    }     
}      
 
function stop() {
    if (isMarch == true) {
        clearInterval(control);
        isMarch = false;
    }
    acumularTime = 0;
    menu()
}







var isMarch = false; 
var segundos = 0; 
function temporizador(){
    segundos = prompt("Ingresa los segundos del temporizador");

    if (isMarch == false) { 
        timeInicial = new Date();
        controlTemp = setInterval(temporiza,1000);
        isMarch = true;
    }
}


function temporiza() { 
    console.clear()
    

    if (segundos > 10) {
        console.log('%c'+segundos, 'color: green');
    }else if (segundos < 11 && segundos > 5) {
        console.log('%c'+segundos, 'color: yellow');
    }else if (segundos < 6 && segundos > 0) {
        console.log('%c'+segundos, 'color: red');
    }else{
        stopTemp()
        menu()
    }

    segundos = segundos - 1;
}  
 
function stopTemp() {
    if (isMarch == true) {
        clearInterval(controlTemp);
        isMarch = false;
    }
    segundos = 0;
}


window.onload = menu()

function menu(){
    console.clear()
    seleccion = prompt("Seleccione una opción \n1 Cronometro \n2 Temporizador")

    if (seleccion == 1) {
        cronometroStart()
    }else if (seleccion == 2) {
        temporizador()
    }
}