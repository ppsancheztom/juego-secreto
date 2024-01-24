/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML= 'Indica un numero del 1 al 10';
*/

let numeroSecreto;
let intentos;
let numeroMaximo = 10;
let listaNumerosSorteados=[];

condicionesIniciales();

function asignarTextoElemento(elemento,texto){
    let tipoElemento = document.querySelector(elemento);
    tipoElemento.innerHTML= texto;
}

function generarNumeroSecreto(){
    let numeroAleatorio= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroAleatorio);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p',`has adivinado todos los numeros posibles del rango del 1 al ${numeroMaximo}`);
        document.getElementById('intentarNumero').setAttribute('disabled','true');
    }else{
        if (listaNumerosSorteados.includes(numeroAleatorio)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }
}

function verificarNumero(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    /*
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    // el triple igual es para colocar un comparador tambien de tipo entre ambos elementos ejemplo de int === int
    console.log(numeroDeUsuario===numeroSecreto);
    */

   if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
    if(numeroDeUsuario<numeroSecreto){
        asignarTextoElemento('p','El numero secreto es mayor');
    }else{
        asignarTextoElemento('p','El numero secreto es menor');
    }
    intentos++;
    limpiarCaja();
   }
} 
 
function limpiarCaja(){
   
    document.querySelector('#valorUsuario').value='';

   /*  
   let valorCaja= document.querySelector('#valorUsuario');
   valorCaja.value='';
    */
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function rJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}


