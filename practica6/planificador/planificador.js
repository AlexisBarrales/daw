var actividades = [
    {
        id: 1,
        dia:"Lunes",
        actividad: [],
    },
    {
        id: 2,
        dia:"Martes",
        actividad: [],
    },
    {
        id: 3,
        dia:"Miercoles",
        actividad: [],
    },
    {
        id: 4,
        dia:"Jueves",
        actividad: [],
    },
    {
        id: 5,
        dia:"Viernes",
        actividad: [],
    },
    {
        id: 6,
        dia:"Sabado",
        actividad: [],
    },
    {
        id: 7,
        dia:"Domingo",
        actividad: [],
    }
]

window.onload = menu()

function menu() {
    console.log("Ingrese el nombre de cualquiera de las siguientes funciones para ejecutar")
    console.log("1.- verSemana()")
    console.log("2.- verDia()")
    console.log("3.- agregarDia()")
    console.log("4.- agregarSemana()")

}

function verSemana() {
    semanaFor("1",2)
    semanaFor("2",2)
    semanaFor("3",2)
    semanaFor("4",2)
    semanaFor("5",2)
    semanaFor("6",2)
    semanaFor("7",2)
    menu()
}

function verDia() {
    console.clear()
    var dia = prompt("Ingresa el numero del día para agregar la actividad \n1 Lunes \n2 Martes \n3 Miercoles \n4 Jueves \n5 Viernes \n6 Sabado \n7 Domingo")
    seleccionarDia(dia, 2)
    menu()
}

function agregarDia() {
    console.clear()
    var dia = prompt("Ingresa el numero del día para agregar la actividad \n1 Lunes \n2 Martes \n3 Miercoles \n4 Jueves \n5 Viernes \n6 Sabado \n7 Domingo")
    seleccionarDia(dia, 1)
}

function agregarSemana() {
    semanaFor("1",1)
    semanaFor("2",1)
    semanaFor("3",1)
    semanaFor("4",1)
    semanaFor("5",1)
    semanaFor("6",1)
    semanaFor("7",1)
}




function seleccionarDia(day, funcion) {
    switch (day) {
        case "1":
            diaEspecifico(1, funcion)
            break;
        case "2":
            diaEspecifico(2, funcion)
            break;
        case "3":
            diaEspecifico(3, funcion)
            break;
        case "4":
            diaEspecifico(4, funcion)
            break;
        case "5":
            diaEspecifico(5, funcion)
            break;
        case "6":
            diaEspecifico(6, funcion)
            break;
        case "7":
            diaEspecifico(7, funcion)
            break;
    
        default:
            alert("No ingresó un día valido")
            menu()
            break;
    }
}

function diaEspecifico(day, funcion){
    actividades.forEach(element => {
        if (day == element.id) {
            if (funcion == 1) {
                if (element.actividad.length < 5) {
                    var prioridad = prompt("Día "+element.dia+ "\nAgregue el nivel de prioridad donde 1 es el más alto y 5 el más bajo")
                    var actividad = prompt("Día "+element.dia+ "\nAgregue la descripción de la actividad numero "+(element.actividad.length+1))
    
                    var act = {
                        prioridad:prioridad,
                        actividad:actividad
                    }
    
                    element.actividad.push(act)
                }else{
                    console.clear()
                    console.log("Ya no se pueden agregar actividades a este día")
                    menu()
                }
            } else if (funcion == 2) {
                console.log("Día "+element.dia)
                console.table(element.actividad)
            }
        }
    });
}

function semanaFor(dia,funcion) {
    if (funcion == 1) {
        for (let index = 0; index < 5; index++) {
            seleccionarDia(dia, 1)
        }
    }else if (funcion == 2) {
        seleccionarDia(dia, 2)
    }
}