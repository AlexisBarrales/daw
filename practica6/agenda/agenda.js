var agenda = []

function nuevoContacto() {
    var nombre = prompt("Ingresa tu nombre");
    var numero = prompt("Ingresa tu número");
    var correo = prompt("Ingresa tu correo");
    var direccion = prompt("Ingresa tu dirección");

    contacto = {
        "nombre": nombre,
        "numero": numero,
        "correo": correo,
        "direccion": direccion,
    }
    agenda.push(contacto)
}

function verContactos(){
    document.getElementById("contactos").innerHTML = ""
    agenda.forEach(function(element){
        document.getElementById("contactos").innerHTML += "Nombre: " + element.nombre + ", Numero: " + element.numero + ", Correo: " + element.correo + ", Dirección: " + element.direccion + "<br>";
    })
}

function contactoEspecifico(){
    nombre = prompt("Escriba el nombre del contacto que desea buscar")
    verContacto(nombre)
}

function verContacto(nombre){
    document.getElementById("contactos").innerHTML = ""
    agenda.forEach(function(element){
        if (nombre.toLowerCase() == element.nombre.toLowerCase()) {
            document.getElementById("contactos").innerHTML += "Nombre: " + element.nombre + ", Numero: " + element.numero + ", Correo: " + element.correo + ", Dirección: " + element.direccion + "<br>";
        }
    })
}

function menu(){
    funcion = prompt("1 Nuevo Contacto \n2 Ver Contactos \n3 Buscar contactos \n4 Menu")

    switch (funcion) {
        case "1":
            nuevoContacto()
            break;
    
        case "2":
            verContactos()
            break;

        case "3":
            contactoEspecifico()
            break;

        case "4":
            menu()
            break;
    }
}

window.onload = menu()