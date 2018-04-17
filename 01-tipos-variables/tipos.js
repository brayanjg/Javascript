var nombre = "28";
var edad = 28;
var fecha = new Date();
var casado = false;
var casa = undefined;
var carro = null;
var arreglo = [];


var usuario = {
    nombre:"Adrian",
    apellido:"Eguez",
    cedula:'123432',
    imprimirenconsola: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.cedula)
    }
}


;



function sumarDosNumeros(numeroUno, numeroDos) {
    //return numeroDos + numeroUno;
}

var sumarDosNumerosDos = function (numeroUno, numeroDos){
    return numeroUno + numeroDos;
};

console.log(sumarDosNumerosDos(2,2));

console.log(usuario.apellido)
usuario.imprimirenconsola()