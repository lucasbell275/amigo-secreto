let listaDeAmigos = []; 


function limpiarCaja(){
    document.getElementById('amigo').value = '';
}


function aggAmigos(){
    let nombres = document.getElementById('amigo');
    let valorNombre = nombres.value;
    if(valorNombre == ''){ 
        alert('No ingresaste ningun nombre. Por favor, inserte un nombre.');
    } else if (listaDeAmigos.includes(valorNombre)) { 
    alert("Ese nombre ya está en la lista.");
    } else{
        listaDeAmigos.push(valorNombre);
        actualizarLista(); 
        limpiarCaja();
    }
    console.log(listaDeAmigos);
}


function actualizarLista(){
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ''; 
    for(let veces = 0; veces < listaDeAmigos.length; veces ++ ){ 
        lista.innerHTML += `<li>${listaDeAmigos[veces]}</li>`; 

    }
}


function sortearAmigos(){
  let amigoSorteado = document.getElementById('resultado'); 
   if(listaDeAmigos.length == 0 ){ 
    alert('No se puede sortear porque no ingresaste ningun nombre.');
   } else{
        let numero = Math.floor(Math.random()*listaDeAmigos.length); 
        let nombreDelElegido = listaDeAmigos[numero]; 
        amigoSorteado.innerHTML = `Tu amigo secreto es: ${nombreDelElegido}`; 
   }
}
