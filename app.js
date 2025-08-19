// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function asignElemtText(elemento, txt){
    let elemthtml = document.querySelector(elemento);
    elemthtml.innerHTML = txt;
    return;
}

function agregarAmigo(nombre){
    asignElemtText('h2', nombre)
}