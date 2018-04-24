let arregloNumeros = [1,2,3,4,5]
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

let usuarioConCincoAnioMenos = arregloUsuarios
    .map(
        (usuario:UsuarioArreglo)=>{
            usuario.edad = usuario.edad-5;
            return usuario;
        }
);

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

}