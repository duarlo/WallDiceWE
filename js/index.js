// selecionar el nodo en donde se introduce el elemento
const contenedor = document.getElementsByTagName('body');
//depuracion
//console.log(contenedor);
// crear el elemento
const diceelement = document.createElement('div');
// asignar clase
diceelement.classList.add('dice');
contenedor[0].appendChild(diceelement);
// dep el elemento ha sido creado
console.log(diceelement);
