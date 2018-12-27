//JavaScript Methods
//  .ForEach - Sirve para hacer un mismo proceso a cada objeto dentro de un array
const elArray = ["Esto", "es", "random", "info", "para", "llenar"];
elArray.forEach(cadaObjeto =>
  console.log(`Aqui viene el objeto: ${cadaObjeto}`)
);

// .Map - Toma la info de un array distinto y puedes hacer con ella lo que quieras,
//          copiarla o alterarla

const elArray = ["Esto", "es", "random", "info", "para", "llenar"];
const elMapa = elArray.map(cadaObjeto => cadaObjeto[1]);

// .join('') - Para unir la todos los objetos de un Array en uno solo
console.log(elMapa.join(""));

// .filter() - es como map, pero la info que va a retornar esta filtrada
//              para eliminar algun elemento
const elArray = ["Esto", "es", "random", "info", "para", "llenar"];
const elFiltro = elArray.filter(cadaObjeto => {
  return cadaObjeto.length < 4;
});
//                       cada elemento mayor que 4 se va

// .findIndex() - To fin the location of an element(s) in an array
const elArray = ["Esto", "es", "random", "info", "para", "llenar"]; //quiero encontrar
// las palabras de 4 letras
const ElIndexo = elArray.findIndex(num => {
  return (num.length = 4);
});

// .indexOf()

// .reduce() Suma todos los elementos que tiene dentro (no se exactamente porq, pero 2 elementos sirven)
const arrayNum = [1, 2, 5, 8];
const reducemeste = arrayNum.reduce((valorUno, valorDos) => {
  return valorUno + valorDos;
});

//  .some() - Indica en true o false si alguno de los elementos es verdadero.
const arrayNum = [1, 2, 5, 8];
console.log(arrayNum.some(elemento => elemento > 3));

// CAMBIAR COSAS DENTRO DE UN OBJETO
const objetos = {
  objetoA: "objetoA1",
  objetoB: "objetoB1"
};
let functionName = objectParam => {
  objectParam.objetoA = "objetoAAAmodificado";
};

functionName(objetos); //ahora esta cambiado

// for... in  SIRVE para crear loops dentro de objetos
for (let variableInventada in objetos.objetoA) {
  console.log(`${variableInventada}:
              ${objetos.objetoA[variableInventada].objetoA1}`);
}

// DOM STUFF
console.dir(document); // para mostrar todos los atributos dentro del documento, sirve para examiner
// ej: console.log(document.URL); o body o head o cualquier parte marcada en la consola

// document.getElementById('') para tomar un elemento del HTML //classname y tagname tambien
document.getElementById("el nombre de la ID");

// .querySelector(".nombreClase o #nombreID") // devuelve el primer elemento de dicho nombre
document.querySelector("#main-header"); // ('input[type="submit"]')
// .querySelectorAll (todos los elementos de dicho nombre)

// CSS :last-child para seleccionar el ultimo de un grupo//
// :nth-child(numero) // para cambiar algun otro elemento
//nth-child(odd) o (even), trata a numeros pares o impares

//    .textContent // Para cambiar el contenido del texto en el contenido.. respeta el estilo
Elemento.textContent = "Lo que he cambiado";

// .innerText // hace lo mismo que textContent pero no respeta el estilo

// .innerHTML // pone un elemento ADENTRO del elemento seleccionado
Elemento.innerHTML = <h1>loCambiado</h1>;

// .style.ElEstilo // para cambiar estilos // hay que usar camel case ajuro
Elemento.style.borderBottom = "solid 3px #000"; //solo cambia 1 elemento, para cambiar todos loop

//     MODULES
//      MODULE.EXPORTS // exporta el contenido apra tenerlo disponible en otro archivo
let aExportar = {};
aExportar.parteDelObjeto = "parte1";

module.exports = aExportar;

// arriba... luego con require puedes solicitarlo en otro archivo
const aExportar = require("./archivo.js");

function Utilizadora() {
  console.log("quiero hacer esto" + aExportar.parteDelObjeto);
}
Utilizadora();

/// Otra forma de hacerlo es
export default objeto;
