
let listaDeAmigos = []; 


function limpiarCaja(){
    document.getElementById('amigo').value = ''; //Tipica funcion de limpiar la caja
}


function aggAmigos(){
    /*Esta es la variable que toma el ID del campo de texto, 
pero no puede capturar el valor. Tiene que hacerse en orden*/
    let nombres = document.getElementById('amigo');
     /*Importante aclarar, la variable que captura el valor de los nombres tiene que ir adentro de la funcion,
      para que CADA VEZ que se clickea en el boton, se actualice el valor de la variable y lo capture.
      Si no siempre va a capturar un espacio vacio.*/
    let valorNombre = nombres.value;
    if(valorNombre == ''){ //Esto se usa por si no se ingresa ningun resultado y no se agreguen valores vacios.
        alert('No ingresaste ningun nombre. Por favor, inserte un nombre.');
    } else if (listaDeAmigos.includes(valorNombre)) { //En este if lo que hacemos es que no deje que haya nombres repetidos.
    alert("Ese nombre ya está en la lista.");
    } else{
        listaDeAmigos.push(valorNombre); //Aca cada vez que es correcto el nombre ingresado, se ingresa a la lista previamente declarada 'listaDeAmigos'
        /*Se ejecuta actualizar lista en el caso de que la condicion puesta en el if de arriba, sea erronea.
        En resumen, se actualiza la lista cada vez que se ingrese un nombre y se aprete el boton Agregar amigo*/
        actualizarLista(); 
        limpiarCaja();
    }
    console.log(listaDeAmigos);
}


function actualizarLista(){
    let lista = document.getElementById('listaAmigos'); //Aca uso una variable para agarrar la lista en HTML
    lista.innerHTML = ''; //Aca la limpio para que no se dupliquen los valores
    for(let veces = 0; veces < listaDeAmigos.length; veces ++ ){ //Un for que recorre la lista de amigos
        lista.innerHTML += `<li>${listaDeAmigos[veces]}</li>`; //Aca se suma en la lista HTML los nombres (correspondientes al numero de veces) como valores de lista (<li>), haciendo que cada uno se ponga abajo del otro y actuen como elementos de lista

    }
}


function sortearAmigos(){
  let amigoSorteado = document.getElementById('resultado'); //Definimos una variable para que cuando sea cambiada, cambie el elemento del HTML.
   if(listaDeAmigos.length == 0 ){ //Aca definimos un if que si no hay amigos en la lista, no se va a realizar el sorteo. Por eso usamos la longitud de la lista, y si es == 0, nos va a soltar el mensaje de abajo
    alert('No se puede sortear porque no ingresaste ningun nombre.');
   } else{
        //Definimos una variable numero para que sea aleatorio y nos de la parte entera, correspondiente a la longitud de la lista de amigos.
        let numero = Math.floor(Math.random()*listaDeAmigos.length); 
        //Aca definimos una variable que va a utilizar la lista y el numero de la variable anterior, para que ya este declarado el amigo secreto.
        let nombreDelElegido = listaDeAmigos[numero]; 
        //Aca cambiamos el contenido del elemento de id 'resultado', para que sea el amigo elegido aleatoriamente.
        amigoSorteado.innerHTML = `Tu amigo secreto es: ${nombreDelElegido}`; 
   }
}
