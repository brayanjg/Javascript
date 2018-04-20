//var nombre = 'brayan';
let segundoNombre: String = 'Andres';
const cedula = '17201782';

segundoNombre = 'Vicente';

const URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre = 123;

////////////////
let nombre: String;
let edad: Number = 28;
let fecha: Date = new Date();
let casado: boolean = false;

class Usuario {
    public mNombre: String;
    private mEdad: Number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: Number,
                cedula: String,
                ) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    public imprimirEnConsola(){
        //
        console.log(`El usuario se llama ${this.mNombre}`)
    }


}
let usuario: Usuario = new Usuario('Adrian',28, '1234543');

console.log(usuario);