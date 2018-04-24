var arregloNumeros = [1, 2, 3, 4, 5];
var arregloDeudas = [73, 123, 23, 43, 54, 678];
var arregloUsuarios = [
    {
        nombre: 'Adrias',
        edad: 12
    },
    {
        nombre: 'Adrias',
        edad: 10
    },
    { nombre: 'Adrias',
        edad: 10 },
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
];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdades = function (arregloDeNumeros) {
    //codigo extra
};
var facultades = function (a) {
    return ['Facultad1', 'Facultad2'];
};
var facultadesDos = function (a) { return ['Facultades1', 'Facultades2']; };
var sumar = 0;
arregloNumeros.forEach(function (valor, indice, arreglo) {
    sumar = sumar + valor;
    console.log(sumar);
});
var resultadoDeLaSuma = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20);
console.log('resultadoDeLaSuma', resultadoDeLaSuma);
var resultadoDeLaSumaDos = arregloNumeros.reduce(function (totalAacumulado, valorArreglo) {
    return totalAacumulado - valorArreglo;
}, 20);
function calcularDeudaDeUsuario(edad) {
    return arregloDeudas.reduce(function (totalAcumulado, deuda) {
        return totalAcumulado + ((edad / 100) * deuda);
    }, 0);
}
var usuarioConCincoAnioMenos = arregloUsuarios
    .map(function (usuario) {
    usuario.edad = usuario.edad - 5;
    usuario.deuda = calcularDeudaDeUsuario(usuario.edad);
    return usuario;
});
console.log('usuariosConCincoAniosMenos', usuarioConCincoAnioMenos);
var resultadoDeLasEdades = arregloUsuarios.reduce(function (totalAacumulado, usuarioArreglo) {
    return totalAacumulado - usuarioArreglo.edad;
}, 0);
console.log('resultadosDeLasEdades', resultadoDeLasEdades);
