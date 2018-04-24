let arregloNumeros = [1,2,3,4,5]

let arregloDeudas = [73,123,23,43,54,678]
let arregloUsuarios: UsuarioArreglo[] = [
    {
        nombre: 'Adrias',
        edad: 12
    },
    {
        nombre: 'Adrias',
        edad: 10
    },
    { nombre: 'Adrias',
        edad: 10}
        ,
    { nombre: 'Adrias',
        edad: 70
    },
    {
        nombre: 'Adrias',
        edad: 32
    },
    {
        nombre: 'Adrias',
        edad: 25
    }


]
let sumarDosNumeros = (numeroUno: number, numeroDos: number)=>{//flat arrow function

    return numeroUno + numeroDos;

};

let totalEdades = arregloDeNumeros=>{
    //codigo extra
};

let facultades = function (a) {
    return ['Facultad1','Facultad2'];
};

let facultadesDos = a=>['Facultades1','Facultades2'];

let sumar = 0;

arregloNumeros.forEach((valor, indice, arreglo)=>{
    sumar = sumar + valor
    console.log(sumar)
}
);

let resultadoDeLaSuma = arregloNumeros.reduce(
    (totalAcumulado, valorArreglo)=>{
        return totalAcumulado - valorArreglo;
    },
    20
);
console.log('resultadoDeLaSuma', resultadoDeLaSuma)

let resultadoDeLaSumaDos = arregloNumeros.reduce(
    (totalAacumulado, valorArreglo)=>{
        return totalAacumulado - valorArreglo;
    },
    20
);
function calcularDeudaDeUsuario(edad) {
    return arregloDeudas.reduce((totalAcumulado, deuda: number)=>{
        return totalAcumulado + ((edad/100)*deuda)
    },0);

}

let usuarioConCincoAnioMenos = arregloUsuarios
    .map(
        (usuario:UsuarioArreglo)=>{
            usuario.edad = usuario.edad-5;
            usuario.deuda = calcularDeudaDeUsuario(usuario.edad);
            return usuario;
        }
).filter((usuario:UsuarioArreglo)=>{
    return (usuario.deuda<100);
    })

console.log('usuariosConCincoAniosMenos', usuarioConCincoAnioMenos);


let resultadoDeLasEdades = arregloUsuarios.reduce(
    (totalAacumulado, usuarioArreglo: UsuarioArreglo)=>{
        return totalAacumulado - usuarioArreglo.edad;
    },
    0
);

console.log('resultadosDeLasEdades', resultadoDeLasEdades)

interface UsuarioArreglo {
    nombre: String;
    edad: number;
    deuda?: number;

}