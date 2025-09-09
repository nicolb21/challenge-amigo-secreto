// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosIngresada = [];
let nombreAmigoIngresado = 0;
let lista = document.getElementById("listaAmigos"); //obtenemos la lista que se mostrara en pantalla
let cantidadDeAmigosParaSorteo=0; //cuenta la cantidad de nombres agregados en la lista
let resultado = document.getElementById("resultado"); //obtenemos el valor del resultado a mostrar


function limpiarLista() {   // Vaciamos el UL antes de cargar
    lista.innerHTML = "";
}


function cargarLista() {  //agregamos nombres a la lista

    limpiarLista();

    // Recorremos el array y agregamos cada <li>
    listaAmigosIngresada.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}


function agregarAmigo() {
    nombreAmigoIngresado = document.getElementById('amigo').value;

    //consultamos si se ingresado un nombre o hay una casilla en blanco
    if (nombreAmigoIngresado == '') {
        alert('Por favor, inserte un nombre');
    }
    else {
        listaAmigosIngresada.push(nombreAmigoIngresado);
        limpiarCaja()
        cargarLista();
    }
    //console.log(listaAmigosIngresada);
  }


function sortearAmigo() {
    cantidadDeAmigosParaSorteo= listaAmigosIngresada.length;

    //consultamos si se agregaron nombres a la lista
    if(cantidadDeAmigosParaSorteo==0)
         alert('Por favor, agregue los nombres de los amigos a sortear');
    else{
        //console.log(`Cantidad de amigos: ${cantidadDeAmigosParaSorteo}`);
        cantidadDeAmigosParaSorteo= Math.floor(Math.random() * cantidadDeAmigosParaSorteo);
        //console.log(`sorteo: ${listaAmigosIngresada[cantidadDeAmigosParaSorteo]}`);
        resultado.innerHTML= "El amigo secreto es " + listaAmigosIngresada[cantidadDeAmigosParaSorteo];
        listaAmigosIngresada = [];
        limpiarLista();
    }
    }



function limpiarCaja() {    // borra la casilla donde se completa el nombre
    document.querySelector('#amigo').value = '';
};

limpiarLista();
