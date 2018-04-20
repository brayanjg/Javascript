//var nombre = 'brayan';
var segundoNombre = 'Andres';
var cedula = '17201782';
segundoNombre = 'Vicente';
var URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre = 123;
////////////////
var nombre;
var edad = 28;
var fecha = new Date();
var casado = false;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //
        console.log("El usuario se llama " + this.mNombre);
    };
    return Usuario;
}());
var usuario = new Usuario('Adrian', 28, '1234543');
console.log(usuario);
